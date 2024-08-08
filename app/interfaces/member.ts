import { AxiosResponse } from "axios";
import { APIResponse } from "@/interfaces/api";

export interface ILoginBody {
  loginId: string;
  password: string;
}

export type TPostLoginResponse = AxiosResponse<APIResponse<string>>;
