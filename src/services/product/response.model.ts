export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: 14.43;
    depth: 28.01;
  };
  review: any[];
  warrantyInformation: "1 month warranty";
  shippingInformation: "Ships in 1 month";
  availabilityStatus: "Low Stock";
  returnPolicy: "30 days return policy";
  minimumOrderQuantity: 24;
  meta: any;
  thumbnail: string;
  images: string[];
}

export interface IResponseProductList {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
