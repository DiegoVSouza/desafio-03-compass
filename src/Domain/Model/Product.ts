export interface Product {
  id: string;
  name: string;
  categoryId: string;
  category: {
    id: string;
    name: string;
    description: string;
  };
  description: string;
  large_description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  is_new: boolean;
  image_links: string[];
  colors: string[]
  created_date: Date;
  updated_date: Date;
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
  limit?: number;
  sorted_by?: string;
}

export interface ProductPost {
  name: string;
  categoryId: string;
  description: string;
  large_description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  is_new: boolean;
  image_links: string[];
  colors: string[]
}

export interface ProductPut {
  id: string;
  name?: string;
  categoryId?: string;
  description?: string;
  large_description?: string;
  price?: number;
  discount_price?: number;
  discount_percent?: number;
  is_new?: boolean;
  image_links?: string[];
  colors?: string[]
}

