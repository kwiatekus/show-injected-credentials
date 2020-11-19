module.exports = {
    main: function (event, context) {
        const port = readEnv("PORT");
        const host = readEnv("HOST");
        const password = readEnv("REDIS_PASSWORD");
        console.log("Redis host ",host);
        console.log("Redis port ",port);
        console.log("Redis password ",password);
        return "Redis HOST :"+host;
    }
}

function readEnv(env = "") {
    return process.env[env] || undefined;
  }