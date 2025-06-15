import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from "mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: '_id' })
    _id: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    name: string;

    @Prop({ required: true })
    user: string;

    @Prop({ required: true })
    role: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    country: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
