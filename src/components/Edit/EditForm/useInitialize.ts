import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialize } from "../../../modules/edit";

export const useInitialize = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);
};
