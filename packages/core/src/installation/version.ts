declare global {
  const OPEN_COAI_VERSION: string
  const OPEN_COAI_CHANNEL: string
}

export const InstallationVersion = typeof OPEN_COAI_VERSION === "string" ? OPEN_COAI_VERSION : "local"
export const InstallationChannel = typeof OPEN_COAI_CHANNEL === "string" ? OPEN_COAI_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
