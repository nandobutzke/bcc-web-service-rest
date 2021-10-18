import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    // Validando o JWT

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT token is missing');
    }

    //type
    //Bearer hfgubdu7878dgdfg787dfg88d
    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        // Forçando a tipagem da variável
        const { sub } = decoded as TokenPayload;

        // Listagem de pedidos do usuário logado
        request.user = {
            id: sub,
        };

        return next();
    } catch {
        throw new Error('Invalid JWT token');
    }
}
