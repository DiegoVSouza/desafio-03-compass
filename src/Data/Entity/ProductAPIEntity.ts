export interface ProductAPIEntity {
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


export interface ProductPagAPIEntity {
  products: ProductAPIEntity[];
  number_of_pages: number;
  page: number;
}
