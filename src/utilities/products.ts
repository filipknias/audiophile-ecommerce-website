import productsData from 'data/products.json';

export const getCategories = () => {
  return [...new Set(productsData.products.map((product) => product.category))];
}

export const getProductById = (id: number) => {
  return productsData.products.filter((product) => product.id === id);
}

export const getProductBySlug = (slug: string) => {
  return productsData.products.filter((product) => product.slug === slug);
}