export interface DataResponse<T extends object> {
  status: boolean;
  data: T[];
  message: string;
}
