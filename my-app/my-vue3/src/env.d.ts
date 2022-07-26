/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_ERROR_PATH: string
  readonly VITE_APP_ID: string
  readonly VITE_APP_BASE_TITLE: string
  readonly NODE_ENV: string
  readonly VITE_PROXY_BASE_URL: string
  readonly VITE_ADMIN_BASE_ROUTE: string
  readonly VITE_ADMIN_BASE_ROUTE_TITLE: string
  readonly VITE_WEB_HASH: string
  // 更多环境变量...
}
