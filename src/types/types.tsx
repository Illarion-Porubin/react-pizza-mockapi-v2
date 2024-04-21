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
  types: string;
  sizes: number;
  price: number;
  pizzasCount: number;
  rating: number;
  category: number;
  identity: string;
};
