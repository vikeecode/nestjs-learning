import { EmoplyeeService } from './emoplyee.service';
export declare class EmoplyeeController {
    private readonly employeService;
    constructor(employeService: EmoplyeeService);
    getEmployee(): string[];
}
