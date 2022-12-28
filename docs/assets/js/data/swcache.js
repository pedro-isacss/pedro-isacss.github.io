const resource = [ /* --- CSS --- */ '/https://www.pedroisac.dev/assets/css/style.css', /* --- PWA --- */ '/https://www.pedroisac.dev/app.js', '/https://www.pedroisac.dev/sw.js', /* --- HTML --- */ '/https://www.pedroisac.dev/index.html', '/https://www.pedroisac.dev/404.html', '/https://www.pedroisac.dev/categories/', '/https://www.pedroisac.dev/tags/', '/https://www.pedroisac.dev/archives/', '/https://www.pedroisac.dev/about/', /* --- Favicons & compressed JS --- */ '/https://www.pedroisac.dev/assets/img/favicons/android-chrome-192x192.png', '/https://www.pedroisac.dev/assets/img/favicons/android-chrome-512x512.png', '/https://www.pedroisac.dev/assets/img/favicons/apple-touch-icon.png', '/https://www.pedroisac.dev/assets/img/favicons/favicon-16x16.png', '/https://www.pedroisac.dev/assets/img/favicons/favicon-32x32.png', '/https://www.pedroisac.dev/assets/img/favicons/favicon.ico', '/https://www.pedroisac.dev/assets/img/favicons/mstile-150x150.png', '/https://www.pedroisac.dev/assets/js/dist/categories.min.js', '/https://www.pedroisac.dev/assets/js/dist/commons.min.js', '/https://www.pedroisac.dev/assets/js/dist/home.min.js', '/https://www.pedroisac.dev/assets/js/dist/misc.min.js', '/https://www.pedroisac.dev/assets/js/dist/page.min.js', '/https://www.pedroisac.dev/assets/js/dist/post.min.js', '/https://www.pedroisac.dev/assets/js/dist/pvreport.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ '', 'raw.githubusercontent.com', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
