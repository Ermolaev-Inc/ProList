import { token, userId, login } from "./types";

export interface IDataRegister { 
  message: string;
  successfully: boolean;
}
export interface IDataLogin extends IDataRegister {
  token: string;
  userId: string;
}
export interface IPropsProjects {
  projectName: string;
  key: number;
}
export interface IPropsCreateProjectButton {
  showCreatePrjectTemplate: any;
}
export interface IAuthContext {
  token: token;
  userId: userId;
  login: Function;
  isAuth: boolean;
}
export interface IProject {
  projectName: string;
  projectContent: ITodo[]
}
interface ITodo {
  name: string;
  description: string;
  status: string;
  timeInProgress: number;
}
export interface IUserData {
  login: string;
  password: string;
  personalChannel: IProject[];
}
