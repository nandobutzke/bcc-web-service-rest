// Sobrescrevendo tipos da library Express

declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
    }
}
