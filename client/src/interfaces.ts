import { token, userId, login } from "./types";
import { Theme } from "./context/ThemeContext";

export interface IDataRegister { 
  message: string;
  successfully: boolean;
}
export interface IDataLogin extends IDataRegister {
  token: string;
  userId: string;
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
  login(jwtToken: string, id: string): void;
  isAuth: boolean;
}
export interface IUserData {
  login: string;
  password: string;
  personalChannel: IProject[];
}

export interface IPropsChangeThemeButton {
  changeTheme: any;
  theme: Theme;
}
export interface IPropsAppContainer {
  showSettings: any;
}
export interface IPropsChannelsContainer extends IPropsAppContainer {
}
export interface IPropsSettingsButton extends IPropsChannelsContainer {
}
export interface IPropsSettingsContainer {
  closeSettings: any;
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

export interface IProjectsContainerProps {
  changeCurrentProject(projectName: string): void;
}

export interface IProjectProps extends IProjectsContainerProps {
  projectName: string;
}

export interface ITodosContainerProps {
  projectName: string;
}
