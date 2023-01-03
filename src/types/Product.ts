export interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
} 

export interface Product {
    id: number;
    slug: string;
    name: string;
    shortName: string;
    image: Breakpoints;
    cartImage: string;
    category: string;
    categoryImage: Breakpoints;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includedItems: {
        quantity: number;
        item: string;
    }[];
    gallery: {
        first: Breakpoints;
        second: Breakpoints;
        third: Breakpoints;
    }
    others: {
        slug: string;
        name: string;
        image: Breakpoints;
    }[];
}