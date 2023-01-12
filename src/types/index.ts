export interface Option {
  value: string;
  label: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type BasketProduct = Product & {
  quantity: number;
};

export interface DialogButton {
  label: string;
  variant: "primary" | "outline" | "secondary";
  onClick: (handleClose: Function) => void;
}

export interface Address {
  addressName: string;
  id: number;
  name: string;
  surname: string;
  address: string;
  city: string;
  country: string;
  district: string;
  zipCode: string;
  doorNo: string;
}
