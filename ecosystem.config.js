module.exports = {
  apps: [
    {
      name: "nodejs",
      script: "./bin/www",
      exp_backoff_restart_delay: 500,
      instances: "max",
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
