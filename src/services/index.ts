import { api } from "./api";

export async function getProducts() {
  try {
    const response = await api.get("/products");

    const { data } = response;

    return data;
  } catch (error) {
    throw Error();
  }
}

export async function getProductById(productId: number) {
  try {
    const response = await api.get(`/products/${productId}`);

    const { data } = response;

    return data;
  } catch (error) {
    throw Error();
  }
}

export async function getStock(productId: number) {
  try {
    const response = await api.get(`/stock/${productId}`);

    const { data } = response;
  
    return data;
  } catch (error) {
    throw Error();
  }
}