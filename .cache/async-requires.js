// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contacts-js": () => import("./../../../src/pages/contacts.js" /* webpackChunkName: "component---src-pages-contacts-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pets-js": () => import("./../../../src/pages/pets.js" /* webpackChunkName: "component---src-pages-pets-js" */)
}

