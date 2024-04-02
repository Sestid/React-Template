import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/dev-api': {
                target: 'http://127.0.0.1:8002/',
                changeOrigin: true,
            },
            '/api': {
                target: 'https://bbs.hupu.com/',
                changeOrigin: true,
            },
            '/mcp': {
                target: 'https://ug.baidu.com/',
                changeOrigin: true,
            },
        },
    },
    // 配置开发服务器中的预览功能、允许你在本地开发服务器中查看静态文件
    preview: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:4523/m1/2899312-0-default/',
                changeOrigin: true,
            },
        },
    },
});
