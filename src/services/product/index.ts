import { IResponseProductList } from "./response.model";

export const LIMIT = 20;
async function fetchProduct(
  skip: number
): Promise<IResponseProductList | null> {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    alert("An error occurred while fetching data.");
    return null;
  }
}

async function searchProduct(q: string): Promise<IResponseProductList | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${q}`);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("An error occurred while fetching data.");
    return null;
  }
}

export { fetchProduct, searchProduct };
