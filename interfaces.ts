export interface ILocalStorageData {
  userData: IUserData
}
interface IUserData {
  token: string;
  userId: string;
}
export interface IUser {
  login: string;
  password: string;
  personalChannel: IPersonalChannel;
  channels: String[];
  save: Function
}
export interface IPersonalChannel {
  [projectName: string]: Array<IProject>;
}
export interface IProject {
  name: string;
  description: string;
  status: string;
  timeInProgress: number;
}
