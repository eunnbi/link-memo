import React, { useState } from 'react';

export const useForm = (initialValue: any) => {
  const [form, setForm] = useState(initialValue);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const initialize = () => {
    setForm(initialValue);
  };

  return {
    form,
    onChange,
    initialize,
    setForm,
  };
};
