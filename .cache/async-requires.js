// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("./../../../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-contacts-js": () => import("./../../../src/pages/contacts.js" /* webpackChunkName: "component---src-pages-contacts-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pedigree-js": () => import("./../../../src/pages/pedigree.js" /* webpackChunkName: "component---src-pages-pedigree-js" */),
  "component---src-pages-pets-js": () => import("./../../../src/pages/pets.js" /* webpackChunkName: "component---src-pages-pets-js" */),
  "component---src-templates-blog-dynamic-page-js": () => import("./../../../src/templates/blogDynamicPage.js" /* webpackChunkName: "component---src-templates-blog-dynamic-page-js" */)
}

