export interface UpdateMyInfoForm {
  name: string;
  id: string;
  password?: string;
  passwordCheck?: string;
  phone?: string;
  publish: boolean;
  email: string;
}

export interface UpdateMyInfoDto {
  name?: string;
  password?: string;
  phone?: string;
  publish?: boolean;
  email?: string;
}
