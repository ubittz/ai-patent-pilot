export interface HomeState {
  me: User;
}

export interface User {
  name: string;
  phone: string;
  email: string;
  address: string;
  bankName: string;
  account: string;
}
