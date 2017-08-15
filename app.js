const browserSync = require('browser-sync');
const express = require('express');
//const shrinkRay = require('shrink-ray');

const app = express();
const port = 9000; // "xprs" in T9

// you can conditionally add routes and behaviour based on environment
const isDev = process.env.NODE_ENV === 'dev';
console.log('isdev',process.env.NODE_ENV)

//app.set('etag', !isDev);
//app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });
//app.use(shrinkRay());

// static example, add real routes here instead
app.use('/', express.static('src/'));

app.listen(port, listening);

function listening () {
    console.log(`Demo server available on http://localhost:${port}`);
    if(isDev) {
        // https://ponyfoo.com/articles/a-browsersync-primer#inside-a-node-application
        browserSync({
            files: ['src/**/*.{html,js,css}'],
            online: false,
            open: true,
            port: port + 1,
            proxy: 'localhost:' + port,
            ui: false
        });
    }
}