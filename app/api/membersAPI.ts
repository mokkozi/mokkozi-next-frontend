import axios from "axios";
import { ILoginBody, TPostLoginResponse } from "interfaces/member";
import axiosInstance from "./axiosInstance";
import { MEMBERS_URLS } from "@/constants/urls";

export const postLogin = async (loginId: string, password: string) => {
  const response: TPostLoginResponse = await axiosInstance.post(
    MEMBERS_URLS.POST_LOGIN,
    {
      loginId,
      password,
    }
  );
  return response.data;
};
