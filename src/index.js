import loadPage from './page-loader.js';
import createHome from './home-module.js';
import createMenu from './menu-module.js';
import createContact from './contact-module.js';

loadPage(createHome(), createMenu(), createContact());

