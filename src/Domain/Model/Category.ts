export interface Category {
  id: string,
  name: string,
  image_link: string,
  description: string,
  created_date: Date,
  updated_date: Date,
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

