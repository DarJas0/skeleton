import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    root: './',
    base: '/build/',
    build: {
        outDir: './public/build',
        manifest: true,
        rollupOptions: {
            input: {
                app: './assets/app.js',
            },
        },
    },
    server: {
        strictPort: true,
        port: 5173,
        origin: 'http://localhost:5173'
    },
    resolve: {
        alias: {
            '@symfony/stimulus-bundle': resolve(__dirname, 'vendor/symfony/stimulus-bundle/assets/dist/loader.js'),
        },
    },
});
