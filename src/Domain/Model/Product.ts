import { Category } from "./Category";

export interface Product {
  id: string;
  name: string
  categoryId: string
  category: Category;
  description: string;
  large_description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  sku: string;
  image_links: string[];
  attributesId: string;
  attributes: Attributes[];
  created_date: Date;
  updated_date: Date;

  is_new: boolean;

}

export interface Attributes {
  id: string
  color: string;
  qtd: number;
  size: string;
}

export interface AttributesPost {
  color: string;
  qtd: number;
  size: string;
}

export interface AttributesPut {
  id: string
  color?: string;
  qtd?: number;
  size?: string;
}

export interface ProductPag {
  products: Product[];
  number_of_pages: number;
  page: number;
}

export interface ProductGet {
  [key: string]: string | number | boolean | undefined;
  id?: string;
  name?: string;
  categoryId?: string;
  price?: number;
  page?: number;
  discount?: boolean;
  new?: boolean;
  limit?: number;
  sku?: string;
  sorted_by?: string;
}

export interface ProductPost {
  name: string
  categoryId: string
  description: string;
  large_description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  sku: string;
  image_links: string[];
  attributes: AttributesPost[];

  is_new: boolean;

}

export interface ProductPut {
  id: string;
  name?: string
  categoryId?: string
  description?: string;
  large_description?: string;
  price?: number;
  discount_price?: number;
  discount_percent?: number;
  sku?: string;
  image_links?: string[];
  attributes?: AttributesPut[];

  is_new?: boolean;
}

