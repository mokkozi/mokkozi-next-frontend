export interface APIResponse<D> {
  code: number;
  message: string;
  data: D;
}
