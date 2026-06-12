interface ImportMetaEnv {
  readonly VITE_OPEN_COAI_SERVER_HOST: string
  readonly VITE_OPEN_COAI_SERVER_PORT: string
  readonly VITE_OPEN_COAI_CHANNEL?: "dev" | "beta" | "prod"

  readonly VITE_SENTRY_DSN?: string
  readonly VITE_SENTRY_ENVIRONMENT?: string
  readonly VITE_SENTRY_RELEASE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export declare module "solid-js" {
  namespace JSX {
    interface Directives {
      sortable: true
    }
  }
}
