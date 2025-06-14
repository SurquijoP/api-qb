import { ConsoleLogger } from '@nestjs/common';
export declare const LOGGER: {
    INIT: string;
    DATA: string;
    END: string;
    ERROR: string;
    DEAD: string;
    RETRY: string;
    REDIS_ERROR: string;
    REDIS_OK: string;
    REDIS_CONNECTION_EXIST: string;
};
export declare class LoggerCustomService extends ConsoleLogger {
    private readonly nameClazz;
    constructor(clazz: string);
    info(method: string, message?: string, data?: any): void;
    debug(method: string, message?: string, data?: any): void;
    errors(method: string, message?: any, trace?: any): void;
}
