/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ASTRO_STUDIO_APP_TOKEN: string;
  readonly ADMIN_PASS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
