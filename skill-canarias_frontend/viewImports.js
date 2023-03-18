/**
 * Este archivo contiene todos los imports necesarios para renderizar los contenidos 
 * de cada vista en los templates
 */

// HOME
export { renderIndex as homeView } from './views/home/javaIndex.js';
export { renderIndex as homeSideView } from './views/home/javaIndexLog.js'

// PERFIL
export { renderProfile as renderProfile } from './views/perfil/perfil.js';

//LOGIN
export { render as renderLogin } from './views/login/login.js';

//REGISTRO
export { render as renderRegister } from './views/register/registro.js';


//EJEMPLO
export { renderEjemplo as RenderExample } from './views/ejemplo/ejemplo.js';



// AMIGOS
//export { showData as renderFriends } from './views/amigos/feature-friends.js';

// // MIS VIAJES
// export { getMisViajesData as renderMisViajes } from './views/mis-viajes/mis-viajes.js';

// // DETALLES DE UN VIAJE
// export { renderHeader as renderHeaderDetallesViajes } from './views/detallesviaje/travel-show.js';
// export { renderButtonTravel as renderButtonDetallesViajes } from './views/detallesviaje/travel-show.js';
// export { renderDivCarousel as renderCarouselDetallesViajes } from './views/detallesviaje/travel-show.js';
// export { renderPost as renderPostDetallesViajes } from './views/detallesviaje/travel-show.js';

// // CREACION DE ACTIVIDAD
// export { renderCreateActivityForm as renderFormCreateActivity } from './views/crear-actividades/main.js';

// //EDITAR ACTIVIDAD
// export { renderEditActivityForm as renderFormEditActivity } from './views/editar-actividades/main.js';

// //CREACIÓN DE UN VIAJE
// export { renderCreateForm as renderFormCreateTravel } from './views/crearviaje/create-travel.js';
// //EDICIÓN DE UN VIAJE
// export { renderEditForm as renderEditarViaje } from './views/editarviaje/edit-travel.js';

// //CREACIÓN DE UN POST
// export { renderCreatePost as renderFormCreatePost} from './views/posts/post.js';