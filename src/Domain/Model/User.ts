export interface User {
  id: string
  email: string;
  password: string;
  name: string
  cpf: string
  document: string
  sex: string
  birthdate: string
  phone: number
  role?: Role;
  address: Address
}

interface Role {
  id: string
  value: string
  label: string;
}

interface Address {
  id: string
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface AddressPost {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface AddressPut {
  id: string
  zipCode?: string
  street?: string
  number?: string
  complement?: string
  neighborhood?: string
  city?: string
  state?: string
}

export interface UserPost {
  email: string;
  password: string;
  name: string
  cpf: string
  document: string
  sex: string
  birthdate: string
  phone: number
  address: AddressPost
}

export interface UserPut {
  id: string,
  email?: string;
  password?: string;
  name?: string
  cpf?: string
  document?: string
  sex?: string
  birthdate?: string
  phone?: number
  address?: AddressPut
}

