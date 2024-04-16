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
  id:string;
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

