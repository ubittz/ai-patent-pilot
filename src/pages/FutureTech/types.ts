export interface Category {
  id: number;
  name: string;
}

export interface CategoryDomain {
  id: number;
  categoryId: number;
  title: string;
  description: string;
}
