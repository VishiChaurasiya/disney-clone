import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    clearScreen: true,
    server: {
        port: 3000,
    },
    base: "/disney-clone",
});
