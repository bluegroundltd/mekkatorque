# mekkatorque
> A pet Node project for experimenting with deployment strategies

### Setup
```bash
npm i
```

### Run
```
# Server
npm run server

# Server on custom PORT (defaults to 3000)
PORT=8080 npm run server

# Background Jobs
npm run jobs
```

### Healthcheck

```
curl -f http://localhost:3000/health #responds 200 - OK 
```

