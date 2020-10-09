import { Status } from "./statuses";

export interface ILocalStorageData {
  userData: IUserData
}
interface IUserData {
  token: string;
  userId: string;
}
export interface IUser extends Document {
  login: string;
  password: string;
  personalChannel: IPersonalChannel;
  channels: String[];
  save: Function
}
export interface IPersonalChannel {
  [projectName: string]: Array<IProject>;
}

export interface IChannel extends Document {
  channelName: string;
  readonly password: string;
  projects: IProject[]
}

export interface IProject {
  projectName: string;
  projectContent: ITodo[]
}

export interface ITodo  {
  todoName: string;
  description: string;
  status: Status;
  timeInProgress: number;
}
