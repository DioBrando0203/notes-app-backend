import { Request as ExpressRequest } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
interface AuthenticatedRequest extends ExpressRequest {
    user: {
        id: number;
        email: string;
        name: string;
    };
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
    getProfile(req: AuthenticatedRequest): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
}
export {};
