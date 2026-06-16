import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit() {
        this.isConnected = true;
        console.log('Database is connected');
        // This method runs automatically when the module initializes.
    }

    onApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log(`Database is disconnected due to Signal: ${signal}`);
    }
    getStatus() {
        return this.isConnected ? 'Connected' : 'Disconnected';
    }
}
