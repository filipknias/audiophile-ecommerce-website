import productsData from 'data/products.json';

export const getCategories = () => {
  return [...new Set(productsData.products.map((product) => product.category))];
}

export const getProductById = (id: number) => {
  return productsData.products.filter((product) => product.id === id)[0];
}

export const getProductBySlug = (slug: string) => {
  return productsData.products.filter((product) => product.slug === slug)[0];
}

export const getProductByCategory = (category: string) => {
  return productsData.products.filter((product) => product.category === category);
}