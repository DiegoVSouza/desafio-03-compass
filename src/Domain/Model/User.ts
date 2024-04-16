export interface User {
  id: string,
  name: string,
  cpf: string,
  sex: string,
  data_de_nascimento: string,
  phone: number,
  email: string,
  password: string,
  cep: string,
}

export interface UserPost {
  name: string,
  cpf: string,
  sex: string,
  data_de_nascimento: string,
  phone: string,
  email: string,
  password: string,
  cep: string,
}

export interface UserPut {
  id: string,
  name?: string,
  cpf?: string,
  sex?: string,
  data_de_nascimento?: string,
  phone?: string,
  email?: string,
  password?: string,
  cep?: string,
}

