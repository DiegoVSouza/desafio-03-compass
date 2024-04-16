import { Admin } from "./Admin"
import { User } from "./User"

export interface Token {
  accessToken: string,
  name: string
}

export interface Login {
  email: string,
  password: string
}

export interface UserStore {
  admin: Admin
  user: User
}