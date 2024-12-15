export interface LoginModel {
  email: string;
  password: string;
}

export interface LoginResponseModel {
  accessToken: string;
  refreshToken?: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
