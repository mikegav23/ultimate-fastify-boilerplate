import "dotenv/config";

function getEnvVar(name: string, fallback?: string): string {
  const value = process.env[name] || fallback;
  if (!value) throw new Error(`❌ Missing required env var: ${name}`);
  return value;
}

export const config = {
  nodeEnv: getEnvVar("NODE_ENV", "development"),
  port: Number(getEnvVar("PORT", "3000")),
  host: getEnvVar("HOST", "0.0.0.0"),
  jwtSecret: getEnvVar("JWT_SECRET"), // no fallback, must exist
  dbUrl: getEnvVar("DB_URL", "postgresql://user:pass@localhost:5432/mydb"),
};
