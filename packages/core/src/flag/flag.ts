import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["OPEN_COAI_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["OPEN_COAI_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("OPEN_COAI_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  OPEN_COAI_AUTO_HEAP_SNAPSHOT: truthy("OPEN_COAI_AUTO_HEAP_SNAPSHOT"),
  OPEN_COAI_GIT_BASH_PATH: process.env["OPEN_COAI_GIT_BASH_PATH"],
  OPEN_COAI_CONFIG: process.env["OPEN_COAI_CONFIG"],
  OPEN_COAI_CONFIG_CONTENT: process.env["OPEN_COAI_CONFIG_CONTENT"],
  OPEN_COAI_DISABLE_AUTOUPDATE: truthy("OPEN_COAI_DISABLE_AUTOUPDATE"),
  OPEN_COAI_ALWAYS_NOTIFY_UPDATE: truthy("OPEN_COAI_ALWAYS_NOTIFY_UPDATE"),
  OPEN_COAI_DISABLE_PRUNE: truthy("OPEN_COAI_DISABLE_PRUNE"),
  OPEN_COAI_DISABLE_TERMINAL_TITLE: truthy("OPEN_COAI_DISABLE_TERMINAL_TITLE"),
  OPEN_COAI_SHOW_TTFD: truthy("OPEN_COAI_SHOW_TTFD"),
  OPEN_COAI_DISABLE_AUTOCOMPACT: truthy("OPEN_COAI_DISABLE_AUTOCOMPACT"),
  OPEN_COAI_DISABLE_MODELS_FETCH: truthy("OPEN_COAI_DISABLE_MODELS_FETCH"),
  OPEN_COAI_DISABLE_MOUSE: truthy("OPEN_COAI_DISABLE_MOUSE"),
  OPEN_COAI_FAKE_VCS: process.env["OPEN_COAI_FAKE_VCS"],
  OPEN_COAI_SERVER_PASSWORD: process.env["OPEN_COAI_SERVER_PASSWORD"],
  OPEN_COAI_SERVER_USERNAME: process.env["OPEN_COAI_SERVER_USERNAME"],
  OPEN_COAI_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("OPEN_COAI_DISABLE_FFF"),

  // Experimental
  OPEN_COAI_EXPERIMENTAL_FILEWATCHER: Config.boolean("OPEN_COAI_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  OPEN_COAI_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("OPEN_COAI_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  OPEN_COAI_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("OPEN_COAI_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  OPEN_COAI_MODELS_URL: process.env["OPEN_COAI_MODELS_URL"],
  OPEN_COAI_MODELS_PATH: process.env["OPEN_COAI_MODELS_PATH"],
  OPEN_COAI_DB: process.env["OPEN_COAI_DB"],

  OPEN_COAI_WORKSPACE_ID: process.env["OPEN_COAI_WORKSPACE_ID"],
  OPEN_COAI_EXPERIMENTAL_WORKSPACES: enabledByExperimental("OPEN_COAI_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get OPEN_COAI_DISABLE_PROJECT_CONFIG() {
    return truthy("OPEN_COAI_DISABLE_PROJECT_CONFIG")
  },
  get OPEN_COAI_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("OPEN_COAI_EXPERIMENTAL_REFERENCES")
  },
  get OPEN_COAI_TUI_CONFIG() {
    return process.env["OPEN_COAI_TUI_CONFIG"]
  },
  get OPEN_COAI_CONFIG_DIR() {
    return process.env["OPEN_COAI_CONFIG_DIR"]
  },
  get OPEN_COAI_PURE() {
    return truthy("OPEN_COAI_PURE")
  },
  get OPEN_COAI_PERMISSION() {
    return process.env["OPEN_COAI_PERMISSION"]
  },
  get OPEN_COAI_PLUGIN_META_FILE() {
    return process.env["OPEN_COAI_PLUGIN_META_FILE"]
  },
  get OPEN_COAI_CLIENT() {
    return process.env["OPEN_COAI_CLIENT"] ?? "cli"
  },
}
