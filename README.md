# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Server setup
On your server, after importing production build, create a `.htaccess` file in the web app root and write this:

```
<ifModule mod_rewrite.c>
    RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</ifModule>
```

this will allow the server to redirect any url to the index.html (no worries the router will take care of displaying the corresponding page). If you do not do this step, you will have 404 errors when reaching website through all composed links.