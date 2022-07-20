import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialize } from "../../../modules/linkMemo";

export const useInitialize = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);
};
