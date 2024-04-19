import { CategoryAPIEntity } from "./CategoryAPIEntity";

export interface ProductAPIEntity {
  id: string;
  name: string
  categoryId: string
  category: CategoryAPIEntity;
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

interface Attributes {
  id: string
  color: string;
  qtd: number;
  size: string;
}

export interface ProductPagAPIEntity {
  products: ProductAPIEntity[];
  number_of_pages: number;
  page: number;
}
