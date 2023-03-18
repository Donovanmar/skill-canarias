import { baseUrl, createElementWithTextNode } from "../../config";

//Fetch simulator, comentar cuando entremos en backend, ya que remplaza el fetch de JS Vanilla.
// import fetchSim from 'fetch-simulator';
// fetchSim.use();

// fetchSim.addRoute('https://somekindofserver.com/services', {
//     get: {
//         response: [{

//             id: 1,
//             name: 'Vuelta en moto',
//             image: './../../img/login.png',
//             description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
//             price: 50,
//             max_num_users: 2,

//         },
//         {
//             id: 1,
//             name: 'Observación de aves rapaces',
//             image: './../../img/aves.jpg',
//             description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
//             price: 25,
//             max_num_users: 5,
//         },
//         {
//             id: 1,
//             name: 'Embarcación, experiencia pirata',
//             image: './../../img/embarcacion.jpg',
//             description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
//             price: 55,
//             max_num_users: 20,
//         }
//         ]
//     }
// });

export async function renderEjemplo() {

    const CONTAINER_TO_PRINT = document.querySelector("#ejemplo-container");
    console.log(CONTAINER_TO_PRINT);

    // fetch("https://somekindofserver.com/services")
    // .then((response) => {
    //     return response.json();
    // })
    // .then((response) => {

    //     console.log(response);

    //     response.forEach(element => {
    //         console.log(element);
    //         // for (const attribute in element) {

    //         //     console.log(element[attribute])
    //         // }

    //         let serviceImage = createElementWithTextNode("img", null, {src: `${element["image"]}`, class: "image-service"})
    //         let serviceContainer = createElementWithTextNode("div", serviceImage, {class: "image-container"});

    //         let dataLineTitle = createElementWithTextNode("h1", `${element["name"]}`);
    //         let dataLineContainer1 = createElementWithTextNode("div", dataLineTitle);
    //         let dataLineTitleDesc = createElementWithTextNode("p", `${element["description"]}`);
    //         let dataLineContainer2 = createElementWithTextNode("div", serviceContainer);
    //         let dataLineContainer3 = createElementWithTextNode("div", dataLineTitleDesc);
    //         dataLineContainer2.appendChild(dataLineContainer3);
    //         let dataContainerSummary = createElementWithTextNode("div", dataLineContainer1, {class: "service"});
    //         dataContainerSummary.appendChild(dataLineContainer2);

    //         let dataContainer = createElementWithTextNode("div", dataContainerSummary);

    //         CONTAINER_TO_PRINT.appendChild(dataContainer);
    //     });
    // });

    // let input = createElementWithTextNode("input", null, {class: "form-control mt-5"});
    // let div = createElementWithTextNode("div", input);

    const DATA = fetchData();

    async function fetchData() {
        
        const token = localStorage.getItem("auth_token");
        const apiUrl = baseUrl+"api/services";
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        };
        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    console.log(DATA);

    console.log(DATA.then((responseResult) => {
        responseResult.forEach(element => {
            console.log(element);
            // for (const attribute in element) {

            //     console.log(element[attribute])
            // }

            let serviceImage = createElementWithTextNode("img", null, {src: `${element["image"]}`, class: "image-service"})
            let serviceContainer = createElementWithTextNode("div", serviceImage, {class: "image-container"});

            let dataLineTitle = createElementWithTextNode("h1", `${element["name"]}`);
            //dataLineTitle.appendChild();
            let dataLineContainer1 = createElementWithTextNode("div", dataLineTitle);
            let dataLineTitleDesc = createElementWithTextNode("p", `${element["description"]}`);
            let dataLineContainer2 = createElementWithTextNode("div", serviceContainer);
            let dataLineContainer3 = createElementWithTextNode("div", dataLineTitleDesc);
            dataLineContainer2.appendChild(dataLineContainer3);
            let dataContainerSummary = createElementWithTextNode("div", dataLineContainer1, {class: "service"});
            dataContainerSummary.appendChild(dataLineContainer2);

            let dataContainer = createElementWithTextNode("div", dataContainerSummary);

            CONTAINER_TO_PRINT.appendChild(dataContainer);
        });
    }))
}