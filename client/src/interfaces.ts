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
  renderProjectTodos: Function;
  clearTodosSection: Function;
}
export interface IPropsCreateProjectButton {
  showCreatePrjectTemplate: any;
}
export interface IPropsCreateProjectTemplate {
  createProject: any
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
export interface ITodo {
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
export interface IPropsTodosContainer {
  title: string;
  todos: ITodo[];
}
export interface IPropsTodos extends ITodo {
  key: number;
}
export interface IPropsChangeThemeButton {
  changeTheme: any
}