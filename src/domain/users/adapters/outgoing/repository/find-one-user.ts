import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {findOneUserPort} from "@users//core/ports/out/repositories";
import {User, UserDocument} from "@users//core/domain/schema/users.schema";

@Injectable()
export class FindOneUserRepository implements findOneUserPort {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async findUserById(id: string): Promise<User | null> {
        return this.userModel.findById(id).exec();
    }

    async findByUser(user: string): Promise<User | null> {
        return this.userModel.findOne({user}).exec();
    }
}