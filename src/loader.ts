let interval = setInterval(() => {
    if (document.getElementsByTagName('my-app').length) {
        require('./main.ts');
        clearInterval(interval);
    }
}, 500);
