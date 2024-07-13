// src/utils/logger.js

class Logger {
    static log(message) {
        const timestamp = new Date().toISOString();
        console.log(`[LOG] [${timestamp}]: ${message}`);
    }

    static error(message) {
        const timestamp = new Date().toISOString();
        console.error(`[ERROR] [${timestamp}]: ${message}`);
    }

    static info(message) {
        const timestamp = new Date().toISOString();
        console.info(`[INFO] [${timestamp}]: ${message}`);
    }
}

export default Logger;
