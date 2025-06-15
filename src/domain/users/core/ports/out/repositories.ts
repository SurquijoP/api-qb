import {User} from "@users//core/domain/schema/users.schema";

export interface findOneUserPort {
    findByEmail(email: string): Promise<User | null>
    findUserById(id: string): Promise<User | null>
    findByUser(user: string): Promise<User | null>
}