export type User = {
    username: string;
    imgUrl: string;
}

export type Product = {
    _id?: string;
    category?: string;
    delivery?: number;
    description?: string;
    keyword?: string;
    offering?: string;
    packageName?: string;
    pages?: number;
    price?: number;
    question?: string;
    title?: string;
    userId?: string;
}