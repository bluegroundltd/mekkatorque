# mekkatorque
> A pet Node project for experimenting with deployment strategies

### Setup

1. Install and run Redis
2. Perform an `npm i`

### Run
```
# Server
npm run server

# Server on custom PORT (defaults to 3000)
PORT=8080 npm run server

# Background Jobs
npm run jobs

# Background Jobs with custom Redis URL (defaults to redis://127.0.0.1:6379)
REDIS_URL="redis://<host>:<port>" npm run jobs
```

### Healthcheck

```
curl -f http://localhost:3000/health #responds 200 - OK
```

