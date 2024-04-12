export type PizzaTypes = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type CartTypes = {
  id: number;
  imageUrl: string;
  title: string;
  types: number;
  sizes: number;
  price: number;
  pizzasPrice: number;
  pizzasCount: number;
  rating: number;
  category: number;
  identity: string;
};

export type UserTypes = {
  accessToken?: string;
  refreshToken?: string;
  publicId?: string;
  phone?: string;
  email?: string;
  name?: string;
  isActivated?: boolean;
  password?: string;
  color?: string;
  id?: string;
};