export declare class DatabaseService {
    private isConnected;
    onModuleInit(): void;
    onApplicationShutdown(signal: string): void;
    getStatus(): "Connected" | "Disconnected";
}
