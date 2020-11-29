module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#ffaf4d","theme_color":"#ffaf4d","display":"minimal-ui","icon":"src/images/gatsby-astronaut.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"6d91c86c0fde632ba4cd01062fd9ccfa"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
