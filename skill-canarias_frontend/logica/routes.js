//Template imports for the different page sections
//import { variable as template } from './../plantillas/crearposts.js';
//import { variableContainingGeneralStructure as template } from './../plantillas/crearactividades.js';
// import { login as loginTemplate } from './../templates/login.js';
// import { register as registerTemplate } from './../templates/registro.js';
// import { profile as profileTemplate } from './../templates/perfil.js';
// import { home as homeTemplate} from './../templates/home.js';
import { form as formConfigTemplate } from './../templates/formulario-configuracion.js';

// Importaciones de los métodos de render de cada vista
import * as View from './../viewImports.js';

import { isUserAuth } from './../logica/users.js';
// Importación del css
import './../css/style.css';

export function exportLogicRoutes() {
    
    const routes = {
        "/": {
            pathname: '/',
            template: formConfigTemplate,
            views: [View.RenderConfigForm]
        },
        // login: {
        //     pathname: '/login',
        //     template: loginTemplate,
        //     views: [View.renderLogin]
        // },
        // register: {
        //     pathname: '/register',
        //     template: registerTemplate,
        //     views: [View.renderRegister]
        // },
        // profile: {
        //     pathname: '/profile',
        //     template: profileTemplate,
        //     views: [View.renderProfile],
        //     conditions: [isUserAuth]
        // },
        // passwordreset: {
        //   pathname: '/home',
        //   template: homeTemplate,
        //   views: [homeView, homeSideView]
        // },
        // home: {
        //     pathname: '/home',
        //     template: homeTemplate,
        //     views: [View.homeView, View.homeSideView],
        //     conditions: [isUserAuth]
        // },
        // example: {
        //     pathname: '/example',
        //     template: exampleTemplate,
        //     views: [View.RenderExample]
        // }
        // route: {
        //     pathname: '/pathname',
        //     template: template,
        //     views: [View.render, /*View.renderCarouselDetallesViajes*/],
        //     conditions: [isUserAuth]
        // },
    };

    const APP_DIV = document.getElementById('app');

    checkCurrentRoute();

    /**
     * Renderiza el template y vistas adecuadas según la ruta de la página actual
     */
    function checkCurrentRoute() {
        let pathnameNoSlash = window.location.pathname.length > 1 ? window.location.pathname.substring(1) : window.location.pathname;

        if (routes[pathnameNoSlash]) {
            APP_DIV.innerHTML = routes[pathnameNoSlash].template;

            routes[pathnameNoSlash].views.forEach(view => {
                view();
            });
            if (routes[pathnameNoSlash].conditions) {
                routes[pathnameNoSlash].conditions.forEach(async (condition) => {
                    let { auth } = await isUserAuth(); // obtiene solo el valor booleano 'auth' de la respuesta de isUserAuth()
                    if (!auth) {
                        onNavigate("/login");
                    }
                });
            }


        } else {
            // Aqui debemos mostrar la página de un ERROR HTTP 404 (no se encuentra esta pagina)
        }
    }


    /**
     * Renderiza en la página la plantilla y la vista de una ruta dada
     * @param {*} pathname La ruta a renderizar
     */
    const onNavigate = (pathname) => {
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )

        let pathnameNoSlash = pathname.length > 1 ? pathname.substring(1) : pathname;

        APP_DIV.innerHTML = routes[pathnameNoSlash].template;

        routes[pathnameNoSlash].views.forEach(view => {
            view();
        });
        //logica para que compruebe si estas logueado cuando pulsas en los enlaces
        if (routes[pathnameNoSlash].conditions) {
            routes[pathnameNoSlash].conditions.forEach(async (condition) => {
                let { auth } = await isUserAuth(); // obtiene solo el valor booleano 'auth' de la respuesta de isUserAuth()
                if (!auth) {
                    onNavigate("/login");
                }
            });
        }

    }

    /**
     * Renderiza las vistas de una ruta despues de que el usuario utilice las flechas del navegador para navegar
     */
    window.onpopstate = () => {
        let pathnameNoSlash = window.location.pathname.length > 1 ? window.location.pathname.substring(1) : window.location.pathname;

        APP_DIV.innerHTML = routes[pathnameNoSlash].template;

        routes[pathnameNoSlash].views.forEach(view => {
            view();
        });
        if (routes[pathnameNoSlash].conditions) {
            routes[pathnameNoSlash].conditions.forEach(async (condition) => {
                let { auth } = await isUserAuth(); // obtiene solo el valor booleano 'auth' de la respuesta de isUserAuth()
                if (!auth) {
                    onNavigate("/login");
                }
            });
        }


    }

    // Hacemos que onNavigate sea usable globalmente
    window.onNavigate = onNavigate;
}
