import ProductModel from "./Product.model";


export default interface Film extends ProductModel {
  real: string;
  synopsis: string;
}
