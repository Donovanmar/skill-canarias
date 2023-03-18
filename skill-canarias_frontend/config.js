export let baseUrl ="http://localhost/";

/**
* Creates an element of the DOM (Document Object Model) with his pertinent text node.
* @param {string} elementType 
* @param {string | element} textNode 
* @param {Object} elementAttributes 
* @returns The element to be created in the DOM.
*/
export function createElementWithTextNode(elementType, textNode = null, elementAttributes = null) {

   const BODY_REFERENCE = document.getElementsByTagName("body")[0];
   let element = document.createElement(elementType);
   let newTextNode;

   if (textNode && typeof (textNode) === "string") {

       newTextNode = document.createTextNode(textNode);
       element.appendChild(newTextNode);

   } else if (textNode) {

       element.appendChild(textNode);
   }

   if (elementAttributes) {

       for (const ATTRIBUTE_NAME in elementAttributes) {
           
           const ATTRIBUTE_VALUE = elementAttributes[ATTRIBUTE_NAME];
           element.setAttribute(ATTRIBUTE_NAME, ATTRIBUTE_VALUE);
       }
   }

   return element;
}

/**
 * Creates a fetch promise by a passed url param, which promise's response errors number 404 and 400 are handled.
 * @param {String} url 
 * @returns Fetch promise whose response had been result, leading to a promise which next .then method call will get the data directly.
 */
export async function getResponseByFetch(url) {

    let promise = await fetch(url)

        .then((response) => {

            console.log(response);

            if (response.status === 404) {

                throw new Error(handleError(404, "NOT FOUND"));

            } else if (response.status === 400) {
                
                throw new Error(handleError(400, "BAD REQUEST"));
            }

            return response.json();
        });

    return promise;
}

/**
 * Handles the error passed by param, displaying only the error on the page (user-friendly).
 * @param {String | number} errorNum 
 * @param {String} errorMeaning 
 */
function handleError(errorNum, errorMeaning) {
    
    for (let childCount = 0; childCount < BODY_REFERENCE.children.length; childCount++) {

        let element = BODY_REFERENCE.children[childCount];
        element.style.display = "none";
    }

    let errorContentHeader = createElementWithTextNode("h1", errorNum + " : " + errorMeaning);
    let errorContentContact = createElementWithTextNode("p", "Please contact with: donovanmarh@gmail.com.");
    let errorContentParagraph = createElementWithTextNode("p", "The API URL service which displays this application is wrong or down.");
    let errorElement = createElementWithTextNode("div", errorContentHeader, { class: "error-container" });
    errorElement.appendChild(errorContentParagraph);
    errorElement.appendChild(errorContentContact);

    BODY_REFERENCE.appendChild(errorElement);
}

/*
.spacer{
    aspect-ratio: 960/85;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin:0;
    padding:0;
}

.layer{
    background-image: url('../img/layered-waves-haikei.svg');
}



//fetch get

const DATA = await fetchData();

async function fetchData() {
        const token = localStorage.getItem("auth_token");
        const apiUrl = baseUrl+"api/viajes";
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
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

//Fetch post
form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Define the URL of the API that will receive the friend request
        const apiUrl = baseUrl+"api/login";

        // Defines the data object to be sent to the server
        const requestData = {
            name: user.value,
            password: password.value
        };
        // Define the application options
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        };
        // Sends the request to the server using fetch
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al enviar la solicitud");
                }
                console.log("Solicitud enviada con éxito");
                return response.json();
            })
            .then(data => {
                localStorage.setItem("auth_token", data.access_token);
                onNavigate("/home");
            })
            .catch(error => {
                console.log(error);
            });
    })
*/