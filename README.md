# slow-calculator-frontend

node v16.15.0 is required

## development
To start next.js project with development mode:
```
yarn
```
```
yarn dev
```

## deploy
To start next.js project with production mode

you should add comments in serverData/data/nginx.conf next to following lines:

```
# listen       443 ssl;
# ssl_certificate /etc/letsencrypt/live/workcard.fun/fullchain.pem;
# ssl_certificate_key /etc/letsencrypt/live/workcard.fun/privkey.pem;

# include /etc/letsencrypt/options-ssl-nginx.conf;
# ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

# if ($server_port = 80) { set $https_redirect 1; }
# if ($host ~ '^www\.') { set $https_redirect 1; }
# if ($https_redirect = 1) { return 301 https://$host$request_uri; }
```


(docker and docker-compose are required):
```
docker build -t slow-calculator-frontend .
```
```
cd serverData/
```
```
docker-compose up -d
```

enjoy!

## SSL-certificate

after "docker-compose up -d" has been implemented run (in ./serverData):
```
chmod ugo+x init-letsencrypt.sh
```
```
./init-letsencrypt.sh
```

The shell script "init-letsencrypt.sh" has custom settings:
```
domains: workcard.fun | www.workcard.fun
email: hemae2468@gmail.com
```

If you need to get SSL-certificate in other domain you have to change these parameters to own.

After the script implementing remove the comments described above and run:

```
docker-compose stop
docker-compose up --force-recreate -d
```

enjoy!

## Tech Stack

The project has the following tech stack

- [Next.js](/https://nextjs.org/docs/getting-started)
- [ReduxJS-Toolkit](/https://redux-toolkit.js.org/introduction/getting-started) especially for Next.js (see way of using in the projects)
- [TypeScript](/https://www.typescriptlang.org/docs/) as main programming language
- [SASS prepocessor](/https://sass-lang.com/guide) (style files with *.scss extansion)
- [Axios](/https://github.com/axios/axios) as XML/HTTP requests manager

For more information:

email: [hemae2468@gmail.com](mailto:hemae2468@gmail.com)

telegram: [@hans_andersennn](https://t.me/hans_andersennn)
