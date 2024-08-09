import { AxiosResponse } from "axios";

export interface APIResponse<D> {
  code: number;
  message: string;
  data: D;
}

export type TStringResponse = AxiosResponse<APIResponse<string>>;
