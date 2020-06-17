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
}
export interface IPersonalChannel {
  projects: Array<IProject>;
}
export interface IProject {
  name: string;
}