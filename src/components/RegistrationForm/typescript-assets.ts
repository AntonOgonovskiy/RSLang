const MS_IN_HOUR = 3600000;
const HOURS_BEFORE_DEAUTHORIZATION = 4;

export interface ISignForm {
  email: string;
  password: string;
}

export interface IRegistrationForm {
  handleClosePopover: () => void;
}

export interface IDataResponce {
  message: string;
  refreshToken: string;
  token: string;
  userId: string;
}

export interface IUserData extends IDataResponce {
  time: string;
}

export { MS_IN_HOUR, HOURS_BEFORE_DEAUTHORIZATION };
