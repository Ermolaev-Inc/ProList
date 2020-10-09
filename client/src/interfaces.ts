import { token, userId, login } from "./types";
import { Theme } from "./context/ThemeContext";
import { Status } from "../../statuses";

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

export interface IPropsSettingsContainer {
  closeSettings: any;
}


export interface IProject {
  projectName: string;
  projectContent: ITodo[]
}

export interface ITodo {
  todoName: string;
  description: string;
  status: Status;
  timeInProgress: number;
}

export interface IAppContainerProps {
  showSettings(): void;
}

export interface IChannelsContainerProps extends IAppContainerProps {
  changeCurrentChannel(channelName: string): void;
}

export interface IChannelProps {
  channelName: string;
  changeCurrentChannel(channelName: string): void;
}

export interface IProjectsContainerProps {
  channelName: string;
  changeCurrentProject(projectName: string): void;
}

export interface IProjectProps {
  projectName: string;
  changeCurrentProject(projectName: string): void;
}

export interface ITodosContainerProps {
  channelName: string;
  projectName: string;
}

