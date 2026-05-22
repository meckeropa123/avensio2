export type Category = 'электроника' | 'одежда' | 'дом' | 'спорт' | 'красота' | 'детские товары';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
  description: string;
  image: string;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}
