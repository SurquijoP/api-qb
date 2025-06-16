export interface AddonsDto {
    addonsId: string;
    name: string;
    price: number;
    description: string;
}

export interface OrderProductDto {
    productId: string;
    productName: string;
    price: number;
    addons: AddonsDto[];
    description: string;
}

export interface OrderDto {
    _id: string;
    value: number;
    address: string;
    clientName: string;
    date: string;
    status: string;
    country: string;
    sellerId: string;
    conversationId: string;
    products: OrderProductDto[];
}

export interface OrderResponseDto {
    orders: OrderDto[];
    total: number;
}