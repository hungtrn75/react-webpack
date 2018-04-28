const express = require('express');

const app = express();

console.log(`env: ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('./webpack.config.js');

    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    const path = require('path');
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    })
}

app.listen(process.env.PORT || 3050, () => {
    console.log('Listening...');
})