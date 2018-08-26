const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const commonsChunkConfig = require('./helpers/commons-chunk-config');
module.exports = withSass(withCSS({
    webpack: config => commonsChunkConfig(config, /\.(sass|scss|css)$/)
}));