import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RootState } from "../../../modules";
import { SuccessResponse } from "../../../types";
import { LinkMemoState } from "../../../types/linkMemo";

export const useEdit = (id: number | undefined) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [warningText, setWarningText] = useState("");
  const { linkName, linkUrl, content, category }: LinkMemoState = useSelector(
    (rootState: RootState) => rootState.linkMemo
  );
  const onEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (linkName === "") {
      setWarningText("북마크 이름은 필수 입력 항목입니다.");
      return;
    }
    if (linkUrl === "") {
      setWarningText("URL 주소는 필수 입력 항목입니다.");
      return;
    }
  };
  return { warningText, onEdit };
};
