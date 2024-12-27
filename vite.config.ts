import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "react", // React 자동 import 비활성화
    }),
  ],
  build: {
    outDir: "build", // 빌드 결과물을 'build' 디렉터리에 생성
  },
});
