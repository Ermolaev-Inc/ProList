export interface IDataRegister { 
  message: string;
  successfully: boolean;
}
export interface IDataLogin extends IDataRegister {
  token: string;
  userId: string;
}