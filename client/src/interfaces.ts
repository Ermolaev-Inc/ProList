import { token, userId, login } from "./types";
export interface IDataRegister { 
  message: string;
  successfully: boolean;
}
export interface IDataLogin extends IDataRegister {
  token: string;
  userId: string;
}
export interface IAuthInfo {
  token: token;
  userId: userId;
  login: Function;
  isAuth: boolean;
}
export interface IUserData {
  login: string;
  password: string;
  personalChannel: Array<IProjects>;
}
export interface IProjects {
  projectName: string;
  projectContent: Array<ITodo>
}
export interface ITodo {
  name: string;
  description: string;
  status: string;
  timeInProgress: number;
}
