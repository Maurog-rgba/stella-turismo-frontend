// Utilitário para importar o environment correto baseado em argumento de configuração

const config = ((): string => {
  const arg = process.env.npm_config_configuration || process.env.CONFIGURATION;
  if (arg === "production") return "production";
  if (arg === "staging") return "staging";
  return "local";
})();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const env =
  config === "production"
    ? require("./environment.production").environment
    : config === "staging"
    ? require("./environment.staging").environment
    : require("./environment.local").environment;

export const environment = env;
