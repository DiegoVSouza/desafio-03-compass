export interface Category {
  id: string,
  name: string,
  image_link: string,
  description: string,
  created_at: Date,
  updated_at: Date,
}


export interface CategoryGet{
  [key: string]: string | number | undefined;
  id?: string;
  limit?: number;
}

export interface CategoryPost {
  name: string,
  description: string,
  image_link: string,
}

export interface CategoryPut {
  id: string,
  name?: string,
  description?: string,
  image_link?: string,
}

