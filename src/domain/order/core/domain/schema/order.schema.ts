import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from "mongoose";

export type OrderDocument = Order & Document;

@Schema({ _id: false })
export class StatusLogs {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    date: number;

    @Prop({ required: true })
    userName: string;
}

@Schema({ _id: false })
export class Addons {
    @Prop({ required: true})
    addonsId: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    description: string;
}

@Schema({ _id: false })
export class OrderProduct {
    @Prop({ required: true})
    productId: string;

    @Prop({ required: true })
    productName: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    addons: Addons[];

    @Prop({ required: true })
    description: string;
}

@Schema({ timestamps: true })
export class Order {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: '_id' })
    _id: string;

    @Prop({ required: true })
    value: number;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    clientName: string;

    @Prop({ required: true })
    date: string;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    currency: string;

    @Prop({ required: true })
    sellerId: string;

    @Prop({ required: true })
    conversationId: string;

    @Prop({ required: true })
    statusLogs: StatusLogs[];

    @Prop({ required: true })
    products: OrderProduct[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
