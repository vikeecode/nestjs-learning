import { EvService } from './ev.service';
export declare class EvController {
    private readonly evService;
    constructor(evService: EvService);
    getUrl(): string | undefined;
}
