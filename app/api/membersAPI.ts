import axiosInstance from "@/api/axiosInstance";
import { MEMBERS_URLS } from "@/constants/urls";
import { TStringResponse } from "@/interfaces/api";

export const postLogin = async (loginId: string, password: string) => {
  const response: TStringResponse = await axiosInstance.post(
    MEMBERS_URLS.POST_LOGIN,
    {
      loginId,
      password,
    }
  );
  return response.data;
};

export const postSignup = async (
  name: string,
  loginId: string,
  password: string,
  passwordConfirm: string
) => {
  const response: TStringResponse = await axiosInstance.post(
    MEMBERS_URLS.POST_SIGNUP,
    {
      name,
      loginId,
      password,
      passwordConfirm,
    }
  );
  return response.data;
};
