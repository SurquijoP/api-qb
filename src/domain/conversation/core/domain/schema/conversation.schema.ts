import mongoose, {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ConversationDocument = Conversation & Document;

@Schema({ _id: false })
export class ConversationEntry {
    @Prop({ required: true })
    id: number;

    @Prop({ required: true, enum: ['client', 'support', 'bot'] })
    sender: 'client' | 'support' | 'bot' ;

    @Prop({ required: true })
    message: string;

    @Prop({ required: true })
    time: string;

    @Prop({ required: true })
    senderName: string;
}

@Schema({ timestamps: true })
export class Conversation {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: '_id' })
    _id: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    sellerId: string;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    isTicket: boolean;

    @Prop({ required: true })
    ticketDate: boolean;

    @Prop({ required: true })
    conversationFlowId: string;

    @Prop({ required: true ,enum: ['clientInit', 'init']})
    typeConversationFlow: 'clientInit' | 'init' ;

    //@Prop({ required: true ,enum: ['clientInit', 'init']})
    //conversationFlow: any ;

    @Prop({ required: true })
    conversation: ConversationEntry[] ;

}

export const UserSchema = SchemaFactory.createForClass(Conversation);
