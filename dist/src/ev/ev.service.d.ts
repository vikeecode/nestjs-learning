import { ConfigService } from '@nestjs/config';
export declare class EvService {
    private configService;
    constructor(configService: ConfigService);
    getDbUrl(): any;
}
