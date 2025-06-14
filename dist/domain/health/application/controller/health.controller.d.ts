import { ConfigService } from '@nestjs/config';
import { HealthCheckService, HttpHealthIndicator, MemoryHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private readonly configService;
    private readonly health;
    private readonly http;
    private readonly memory;
    constructor(configService: ConfigService, health: HealthCheckService, http: HttpHealthIndicator, memory: MemoryHealthIndicator);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
