# Devlog

## Custom hook

**여러가지 일을 하는 커스텀 훅을 한 가지 일만 하도록 분리**

`useLogin` 커스텀 훅

리팩토링 전

```typescript
export const useLogin = () => {
  const navigate = useNavigate();

  const { form, onChange } = useForm({
    id: "",
    password: "",
  });
  const [saveId, handleSaveId] = useToggle(false);
  const [warningText, setWarningText] = useState("");
  const { isLoading, mutate } = useMutation<
    LoginResponse,
    unknown,
    LoginVariables
  >(({ id, password }) => login(id, password), {
    retry: 1,
    onError: () => {
      setWarningText(
        "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
      );
    },
    onSuccess: (data) => {
      const { success, userId } = data;
      if (success) {
        localStorage.setItem("USER", JSON.stringify(userId));
        setWarningText("");
        navigate("/main");
      } else {
        setWarningText(
          "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
        );
      }
    },
  });
  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.id === "") {
      setWarningText("아이디를 입력해주세요.");
      return;
    }
    if (form.password === "") {
      setWarningText("비밀번호를 입력해주세요.");
      return;
    }
    mutate({ id, password });
  };

  return {
    form,
    onChange,
    saveId,
    handleSaveId,
    warningText,
    onLogin,
  };
};
```

`useLogin` 코드 문제점

- `LoginForm`에 필요한 상태들이 전부 `useLogin` 훅으로부터 리턴된다.
- `useLogin` 커스텀 훅의 핵심은 `onLogin` 이벤트 함수지만, 그 외의 상태들과 함수들을 많이 `return` 한다.
- `onLogin` 함수와 관련 없는 함수를 반환한다. (`onChange`, `handleKeepLogin`)
- `onLogin` 함수와 관련 없는 상태를 반환한다. (`saveId`)

<br/>

1차 리팩토링

```typescript
// useLogin
export const useLogin = (id: string, password: string) => {
  const navigate = useNavigate();
  const [warningText, setWarningText] = useState("");
  const { isLoading, mutate } = useMutation<
    LoginResponse,
    unknown,
    LoginVariables
  >(({ id, password }) => login(id, password), {
    retry: 1,
    onError: () => {
      setWarningText(
        "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
      );
    },
    onSuccess: (data) => {
      const { success, userId } = data;
      if (success) {
        localStorage.setItem("USER", JSON.stringify(userId));
        setWarningText("");
        navigate("/main");
      } else {
        setWarningText(
          "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
        );
      }
    },
  });

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id === "") {
      setWarningText("아이디를 입력해주세요.");
      return;
    }
    if (password === "") {
      setWarningText("비밀번호를 입력해주세요.");
      return;
    }
    mutate({ id, password });
  };

  return {
    isLoading,
    warningText,
    onLogin,
  };
};
```

- `onLogin` 함수와 관련없는 상태와 관련 상태 업데이트 함수 제거 (`saveId`, `handleSaveId`, `onChange`, `form`)
- 아이디 저장 로직은 `useSaveId` 커스텀 혹으로 분리 (`saveId`, `handleSaveId`)
- 하지만, 필요한 상태 (`form`의 `id`와 `password`)는 `useLogin` 커스텀훅의 인자로 전달받음.
- 핵심인 `onLogin` 이벤트 함수와 부가적인 상태들만 존재한다.

```typescript
// LoginForm
const LoginForm = () => {
  const { form, onChange, setForm } = useForm({
    id: "",
    password: "",
  });
  const { id, password } = form;
  const [saveId, handleSaveId] = useSaveId(id, setForm);
  const { onLogin, warningText, isLoading } = useLogin(id, password);
  return (
    <Form onSubmit={onLogin}>
      {warningText && <Text>{warningText}</Text>}
      // ...
      <CheckBox
        label="아이디 저장"
        isChecked={saveId}
        onToggle={handleSaveId}
      />
    </Form>
  );
};
```

<br/>

2차 리팩토링

- `useLogin` 함수에 폼 유효성 검사 로직과 api 호출 로직이 들어 있어 관심사 분리가 필요하다.
  - 이때 `redux`를 이용하여 `warningText`를 어느 로직에서나 바꿀 수 있도록 한다.
- 아이디 저장 로직을 담당하는 컴포넌트를 만들어 로직 관심사 분리가 필요하다. (`SaveIdCheckBox`)

```typescript
// useWarning
// warningText 바꾸는 로직을 담은 함수 반환
export const useWarning = () => {
  const dispatch = useDispatch();
  const changeWarningText = (text: string) => {
    dispatch(setWarningText(text));
  };
  return { changeWarningText };
};
```

```typescript
// usePostLogin (로그인 api 호출 로직)
export const usePostLogin = () => {
  const { changeWarningText } = useWarning(); // useWarning 이용
  const navigate = useNavigate();
  return useMutation<AuthResponse, unknown, AuthState>(
    ({ id, password }) => login(id, password),
    {
      retry: 1,
      onError: () => {
        changeWarningText(
          "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
        );
      },
      onSuccess: (data) => {
        const { success, userId } = data;
        if (success) {
          storeUserId(userId!);
          navigate("/main");
        } else {
          changeWarningText(
            "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
          );
        }
      },
    }
  );
};
```

```typescript
// useValidation (폼 유효성 검사 로직)
export const useValidation = () => {
  const { changeWarningText } = useWarning();
  const validateForm = ({ id, password }: ValidateState): boolean => {
    if (id === "") {
      changeWarningText("아이디를 입력해주세요.");
      return false;
    } else if (password === "") {
      changeWarningText("비밀번호를 입력해주세요.");
      return false;
    }
    return true;
  };
  return { validateForm };
};
```

```typescript
// SaveIdCheckBox
const SaveIdCheckBox = () => {
  const { saveId, onToggle } = useSaveId();

  return (
    <CheckBox label="아이디 저장" isChecked={saveId} onToggle={onToggle} />
  );
};
```

```typescript
// 최종 LoginForm
const LoginForm = () => {
  const { id, password, warningText } = useLoginState();
  const { onChange } = useChangeInput();
  const { validateForm } = useValidation();
  const { mutate, isLoading } = usePostLogin();

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm({ id, password })) {
      mutate({ id, password });
    }
  };

  return (
    <Form onSubmit={onLogin}>
      {warningText && <Text>{warningText}</Text>}
      {/**/}
      <SaveIdCheckBox />
      {/**/}
    </Form>
  );
};

export default LoginForm;
```

- 결국 `useLogin` 커스텀 훅을 없애고, `useLogin` 커스텀 훅을 구성하고 있던 여러 로직들을 하나의 커스텀 훅으로 분리했다. (`useValidation`, `usePostLogin`)
- `onLogin` 이벤트 함수도 커스텀 훅으로 분리할까 고민했지만, 이미 이벤트 함수의 주요 로직들이 커스텀 훅으로 분리되어 있다. 그래서 뷰와 로직의 관심사가 어느정도 분리가 되었다고 판단하여 필요성을 느끼지 못했다.
- 첫 `useLogin` 코드와 비교해보면 로직 간의 관심사가 분리되었다.

> 한 컴포넌트에 필요한 상태들과 함수들을 하나의 커스텀 훅으로 전부 관리하는 것은 좋은 방법이 아니다.<br/>
> 하나의 컴포넌트 안에서도 로직의 관심사 분리가 필요하고 커스텀 훅은 한가지 로직만 담당해야 한다. <br/>
> 만약 하나의 컴포넌트가 여러가지 일을 한다면 컴포넌트를 분리하는 것도 고려해야 한다.

<br/>
<br/>

**커스텀 훅으로 로직을 분리하는 기준 찾기**

`Component & Hooks` 패턴을 사용했다. 커스텀 훅으로 어느 수준까지 로직을 분리해야 하는지 기준점을 찾기 어려웠지만, 리팩토링 과정을 거치며 나름대로 정한 기준을 정리해보도록 한다.

1. 먼저, 공통적으로 사용되는 로직은 무조건 커스텀 훅으로 만들어 분리했다. (`src/hooks` 폴더에 있음)
   - [useToggle](https://github.com/eunnbi/link-memo/blob/main/src/hooks/useToggle.ts)
   - [useModal](https://github.com/eunnbi/link-memo/blob/main/src/hooks/useModal.ts)
   - [useForm](https://github.com/eunnbi/link-memo/blob/main/src/hooks/useForm.ts) 등
2. 만약 하나의 컴포넌트에서만 사용되는 로직이라면 경우에 따라 커스텀 훅을 만들어 분리하거나 하지 않았다.
   - `api` 호출 로직은 커스텀 훅으로 만들어 분리 (`react query` + `custom hook`)
     - [DeleteModal](https://github.com/eunnbi/link-memo/blob/main/src/components/Categories/DeleteModal/index.tsx)에서 사용하는 [useDeleteCategory](https://github.com/eunnbi/link-memo/blob/main/src/components/Categories/DeleteModal/useDeleteCategory.ts) 등
   - `redux`를 사용하는 컴포넌트라면 여러 컴포넌트에서 동일한 액션이 `dispatch` 되어야 하는 경우가 존재하여 로직을 커스텀 훅으로 만들어 분리 및 재사용
   - `common` 컴포넌트를 이용하여 렌더링하는 경우 이미 `view`가 관심사에서 분리된 상황이므로 로직을 따로 분리하지 않음.
     - [CategoryMenu](https://github.com/eunnbi/link-memo/blob/main/src/components/Categories/CategoryItem/CategoryMenu.tsx)
     - [LinkMemoMenu](https://github.com/eunnbi/link-memo/blob/main/src/components/LinkMemo/LinkMemoItem/LinkMemoMenu.tsx)
     - [CategoryAddButton](https://github.com/eunnbi/link-memo/blob/main/src/components/Categories/CategoryAddButton/index.tsx)
     - [AddModal](https://github.com/eunnbi/link-memo/blob/main/src/components/Categories/AddModal/index.tsx)
     - [EditModal](https://github.com/eunnbi/link-memo/blob/main/src/components/Categories/EditModal/index.tsx) 등

<br/>

> 결론적으로 최대한 컴포넌트의 로직 간 관심사, 컴포넌트 뷰와 로직의 관심사를 분리하고, 재사용되기 용이하도록 커스텀 훅을 만들어 로직을 분리했다.

<br/>

> **관심사 분리를 왜 해야 할까??**<br/>
>
> `Separation of Concerns`
>
> - 하나의 함수나 컴포넌트에게 한번에 너무 많은 일(`concerns`)을 부여하면 코드를 읽기 어려워진다.
> - 가장 간단한 해결책은 한번에 한 가지 걱정만 하도록 단위를 잘게 나누는 것이다. 즉, 코드가 하나의 관심사만 갖도록 하고 그 관심사에 대해서만 충실히 동작하도록 만들어야 한다.
>
> 관심사의 분리 장점
>
> - 코드가 더욱 명료해짐 : 코드의 역할과 목적이 잘 드러나 코드에 대한 파악이 쉽다.
> - 코드 재사용성이 올라감 : 여러 역할이 섞여있는 코드보다, 역할별로 분리되어 있는 코드가 재사용하기 쉽다.
> - 유지 보수가 용이함 : 변경 사항이 발생했을 때 전체가 수정되는 것이 아니라 해당 관심사에 연관된 코드만 수정하면 된다.
> - 테스트 코드를 작성하기 쉬워짐 : 얽혀있는 로직보다 분리되어 있는 로직에 대한 테스트가 보다 더 간단해짐

<br/>
<br/>

## React Query

**staleTime, cacheTime 옵션**

```typescript
export const useFetchCategories = () => {
  const { data, status } = useQuery<CategoriesResponse>(
    categoriesKey,
    () => getCategories(),
    {
      refetchOnWindowFocus: false,
      onError: () => {
        // ...
      },
    }
  );
  return { data, status };
};
```

`useFetchCategories` 코드의 문제점

- 캐시된 데이터를 사용하지 못하고 refetch한다.
- 불필요한 api 요청 발생

리팩토링

```tsx
export const useFetchCategories = () => {
  const { data, status } = useQuery<CategoriesResponse>(
    categoriesKey,
    () => getCategories(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      onError: () => {
        // ...
      },
    }
  );
  return { data, status };
};
```

- [React Query 공식문서 - Caching](https://tanstack.com/query/v4/docs/guides/caching?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/caching)
- `staleTime` : 데이터가 `fresh`에서 `stale` 상태로 변경되는데 걸리는 시간,
  - 기본값이 0이다. 즉, `fetch` 완료한 즉시 `stale`하다고 판단하여 캐싱 데이터와 무관하게 계속 `refetch`한다.
  - `staleTime`을 `Infinity`로 설정하여 `refetch`하지 못하도록 막을 수 있다.
- `cacheTime` : 데이터가 `inactive` 상태일 때 캐싱된 상태로 남아 있는 시간
  - 기본값: 5분
  - 쿼리 인스턴스가 `unmount` 되면 데이터는 `inactive` 상태로 변경되며, 캐싱된 데이터는 `cacheTime`만큼 유지된다.
  - `cacheTime`이 지나면 가비지 콜렉터에 의해 수집된다.
  - `cacheTime`을 `Infinity`로 설정하여 `categories` 데이터가 항상 캐싱되도록 한다.

> React Query Life Cycle
>
> - 쿼리 인스턴스 `mount`
> - `data fetch` and `caching by query key`
> - 데이터는 `fresh` 상태에서 `staleTime` 이후 `stale` 상태로 변함
> - 쿼리 인스턴스 `unmount`
> - 캐싱된 데이터는 `cacheTime` 만큼 유지되다가 가비지 콜렉터에 의해 수집됨
> - 만약 `cacheTime`이 지나기 전에 쿼리 인스턴스가 새롭게 `mount`되면, `fetch`가 실행되고 `fresh`한 값을 가져오는 동안 캐시 데이터를 보여줌

<br/>

**최신 데이터 유지하기**

- `stale` 옵션을 `Infinity`로 설정했으니, 최신 데이터를 다시 가져오고 싶은 경우 `Query Invalidation`을 해야 한다.
- `useMutation`의 `onSuccess` 옵션을 이용하여 api 호출 성공 시 `query`를 `invalidate` 하면 된다.

```tsx
const postMutation = useMutation<
  CategoryPostResponse,
  unknown,
  CategoryPostVariable
>(({ categoryName }) => postCategory(categoryName), {
  onSuccess: () => {
    queryClient.invalidateQueries(categoriesKey.all);
  },
});
```

<br/>

**Query Key**

Query key는 쿼리 무효화와 자동 refetch에서 중요한 역할을 하기 때문에 constants 폴더에서 객체로 관리하도록 했다.

```typescript
export const categoryKeys = {
  all: ["categories"] as const,
};

export const linkMemoKeys = {
  all: ["linkMemos"] as const,
  filter: (categoryId: number, searchQuery: string) =>
    ["linkMemos", categoryId, searchQuery] as const,
  like: ["linkMemos", "like"] as const,
};
```

<br/>
<br/>

## Typescript

**중복 작성 피하기**

- 인터페이스 필드의 일부를 타입으로 사용하거나 여러 인터페이스를 합치거나 필드 일부를 합친 타입을 사용하는 경우가 많았다.
- 필드명과 타입을 중복으로 작성하는 것을 피하기 위해 `extends`, `&` 연산자와 `Pick` 제네릭 타입을 많이 이용했다.

리팩토링 전

```typescript
export interface LinkMemoState {
  linkName: string;
  linkUrl: string;
  content: string;
  category: Category;
}

export interface LinkMemoId {
  memoId: number;
}

export interface LinkMemoResponse {
  memoId: LinkMemoId["memoId"];
  linkName: LinkMemoState["linkName"];
  linkUrl: LinkMemoState["linkUrl"];
  content: LinkMemoState["content"];
  categoryId: Category["categoryId"];
  categoryName: Category["categoryName"];
  like: boolean;
}
```

리팩토링 후

```typescript
export interface LinkMemoState {
  linkName: string;
  linkUrl: string;
  content: string;
  category: Category;
}

export interface LinkMemoId {
  memoId: number;
}

export type LinkMemoResponse = LinkMemoId &
  Category &
  Pick<LinkMemoState, "linkName" | "linkUrl" | "content"> & { like: boolean };
```

<br/>

**제네릭 타입 활용하기**

`useForm` 리팩토링 전

```typescript
export const useForm = (initialValue: any) => {
  const [form, setForm] = useState(initialValue);
  // ...
};
```

`useForm` 리팩토링 후

```typescript
export function useForm<T extends object>(initialValue: T) {
  const [form, setForm] = useState(initialValue);
  // ...
}
```
