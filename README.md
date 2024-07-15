# 🚀 Running This Project

## Requirements

- Docker
- NPM/YARN Node 14 recommended but 16 will work

### Build Image

```
docker build -t mystrapi:latest .
```

### Copy `.env.example` to `.env`
Get the missing variables from Agustin

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=

DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=cms_db
DATABASE_USERNAME=cms_username
DATABASE_PASSWORD=cms_password
NODE_ENV=development
DATABASE_CLIENT=strapi

```

### Running Project

Runs on http://localhost:1337

```
docker-compose up -d
```

If you make changes to the package.json delete the strapi image before running docker-compose up again
This should be updated with future devops update so you don't have to worry about this.

### Deploying

Go to root where you have the permission key, if you don't have one ask agustin@bidfta.com for one.

Production
```
ssh -i ec2-strapi-key-pair-production.pem ubuntu@34.236.157.117
```

Staging
```
ssh -i ec2-strapi-key-pair-staging.pem ubuntu@52.90.156.74
```

Pull Latest changes and enter passcode

```
cd bidfta-cms
git pull
```



Then we need to restart the server

```
cd ~ && pm2 startOrRestart ecosystem.config.js
```

## Author

Agustin Manriquez Cruz agustin@bidfta.com
