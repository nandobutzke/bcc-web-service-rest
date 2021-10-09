import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User
    token: string;
}

export default class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: { email }
        });

        if (!user) {
            throw new Error('Incorrect email/password combination');
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination');
        }

        const token = sign({}, '99159e3a68a5672c1461e7b0b90629c4', {
            subject: user.id,
            expiresIn: '1d',
        });

        return {
            user,
            token,
        };
    }
}