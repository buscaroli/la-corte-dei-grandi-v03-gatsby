const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/pages/blog.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/pages/contacts.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/pages/index.js"))),
  "component---src-pages-pedigree-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/pages/pedigree.js"))),
  "component---src-pages-pets-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/pages/pets.js"))),
  "component---src-templates-blog-dynamic-page-js": hot(preferDefault(require("/home/matt/code/la-corte-dei-grandi-v03-gatsby/src/templates/blogDynamicPage.js")))
}

