import { defineConfig } from '@playwright/test';

export default defineConfig({
    fullyParallel: true,
    // retries: 2,
    use: {
        ignoreHTTPSErrors: true,
        actionTimeout: 10000,
        // video: 'on-first-retry',  
        video: 'retain-on-failure',  
        headless: true,
        viewport: { width: 1280, height: 720 },
        },
});