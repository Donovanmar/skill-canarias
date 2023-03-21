import { baseUrl, createElementWithTextNode } from "../../config";

export async function renderFormConfig() {

    let globalState = 0;

    const CONTAINER_TO_PRINT = document.querySelector("#form-container");
    console.log(CONTAINER_TO_PRINT);

    let formElement = createElementWithTextNode("form", null, {id:"form"});

    let labelMap = createElementWithTextNode("label", "Tamaño del mapa, número de parcelas");
    let mapSizeInput = createElementWithTextNode("input", null, {type:"number", required: "required", value: 64, id:"map-size"});
    let labelMaxOccupiedArea = createElementWithTextNode("label", "Porcentaje máximo de área ocupada que tienen las parcelas");
    let maxOccupiedAreaInput = createElementWithTextNode("input", null, {type:"number", required: "required", value: 80, id:"max-occupied-area"});

    let dataContainer = createElementWithTextNode("div", formElement);
    formElement.appendChild(labelMap);
    formElement.appendChild(mapSizeInput);
    formElement.appendChild(labelMaxOccupiedArea);
    formElement.appendChild(maxOccupiedAreaInput);

    let zones = ["Naturaleza", "Urbana", "Comercial"];

    zones.forEach(zone => {
        let zoneName = createElementWithTextNode("label", zone, {class:"zones"});
        let labelMin = createElementWithTextNode("label", "Mínimo nº de zonas de este tipo");
        let minZones = createElementWithTextNode("input", null, {type:"number", required: "required",value:2, id:`minZones-${zone}`});
        let labelMax = createElementWithTextNode("label", "Máximo nº de zonas de este tipo");
        let maxZones = createElementWithTextNode("input", null, {type:"number", required: "required",value:8, id:`maxZones-${zone}`});
        let labelMaxSize = createElementWithTextNode("label", "Parcelas de este tipo");
        let maxZoneSize = createElementWithTextNode("input", null, {type:"number", required: "required",value:500, id:`maxZoneSize-${zone}`});
        let labelMaxTotalSize = createElementWithTextNode("label", "Máximo nº de parcelas de este tipo en el mapa");
        let maxTotalSize = createElementWithTextNode("input", null, {type:"number", required: "required",value:800, id:`maxTotalSize-${zone}`});
        let zoneContainer = createElementWithTextNode("div", zoneName);

        switch (zone) {
            case "Urbana":
                minZones.value = 4;
                maxZones.value = 6;
                maxZoneSize.value = 100;
                break;
            case "Comercial":
                minZones.value = 2;
                maxZones.value = 8;
                maxZoneSize.value = 50;
                maxTotalSize.value = 200;
                break;
            default:
                break;
        }

        zoneContainer.appendChild(labelMin);
        zoneContainer.appendChild(minZones);
        zoneContainer.appendChild(labelMax);
        zoneContainer.appendChild(maxZones);
        zoneContainer.appendChild(labelMaxSize);
        zoneContainer.appendChild(maxZoneSize);
        zoneContainer.appendChild(labelMaxTotalSize);
        zoneContainer.appendChild(maxTotalSize);

        formElement.appendChild(zoneContainer);
    });

    let assert = true;

    let buttonSave = createElementWithTextNode("button", "Guardar");
    let buttonSubmit = createElementWithTextNode("button", "Generar", {type: "submit", onsubmit: "return false;"});
    buttonSubmit.addEventListener("click", function () {
        
        let map = document.getElementById("map-container");
        let form = document.getElementById("form");
        formElement.onsubmit = function() {return false;};
        const CONTAINER_TO_PRINT_MAP = document.getElementById("map-container");
        if (assert) {
            while (CONTAINER_TO_PRINT_MAP.firstChild) {
                CONTAINER_TO_PRINT_MAP.removeChild(CONTAINER_TO_PRINT_MAP.firstChild);
            }
        }

        let auxMapSize = document.getElementById("map-size").value;
        let auxMaxOcuppiedArea = document.getElementById("max-occupied-area").value;

        let totalParcelas = auxMapSize * auxMapSize;
        let auxCount = 1;
        let auxContainer;
        let line;
        let random = Math.floor(Math.random() * totalParcelas);
        
        for (let parcelaCount = 0; parcelaCount < auxMapSize; parcelaCount++) {

            if (auxCount == 1) {
                
                line = createElementWithTextNode("div");
            }

            if (auxCount == auxMapSize) {

                map.appendChild(line);
                auxCount = 1;
            }

            if (parcelaCount == 22) {
                auxContainer = createElementWithTextNode("div", null, {class:"parcela-nature"});
            } else if (parcelaCount == 36) {
                auxContainer = createElementWithTextNode("div", null, {class:"parcela-urban"});
            } else if (parcelaCount == 30) {
                auxContainer = createElementWithTextNode("div", null, {class:"parcela"});
            } else {
                auxContainer = createElementWithTextNode("div", null, {class:"parcela"});
            }

            line.appendChild(auxContainer);
            
            auxCount++;
        } 

        let randomNumbers = [Math.floor(Math.random * parseInt(auxMapSize)), Math.floor(Math.random * parseInt(auxMapSize)), Math.floor(Math.random * parseInt(auxMapSize))];

        let containerWithParcelas = document.querySelector("#map-container");

        if (containerWithParcelas.children.length == auxMapSize) {
                    
            for (let mapParcelaCount = 0; mapParcelaCount < containerWithParcelas.children.length; mapParcelaCount++) {
    
                    let parcela = containerWithParcelas.children[mapParcelaCount];
 
                    randomNumbers.forEach(randomNumber => {

                        if (mapParcelaCount == randomNumber) {
                            
                            parcela.className = "parcela-nature";
                        }
                    });

                    parcela.className = "parcela-urban";
            }
        }

        let randomNumberZones;

        zones.forEach(zone => {

            let minZones = document.getElementById(`minZones-${zone}`);
            let maxZones = document.getElementById(`maxZones-${zone}`)
            let minZonesNature;
            let minZonesUrban;
            let minZonesComercial;
            let maxZonesNature;
            let maxZonesUrban;
            let maxZonesComercial;
            let randomNature;
            let randomUrban;
            let randomCommercial;

            switch (zone) {
                case "Naturaleza":
                    minZonesNature = minZones.value;
                    maxZonesNature = maxZones.value;
                    randomNumberZones = Math.floor(Math.random() * maxZonesNature);
                    break;
                case "Urbana":
                    minZonesUrban = minZones.value;
                    maxZonesUrban = maxZones.value;
                    randomNumberZones = Math.floor(Math.random() * maxZonesUrban);
                    break;
                case "Comercial":
                    minZonesComercial = minZones.value;
                    maxZonesComercial = maxZones.value;
                    randomNumberZones = Math.floor(Math.random() * maxZonesComercial);
                    break;
                default:
                    break;
            }
            //console.log(randomNumberZones);
        });

        for (let count = 1; count < auxMapSize; count++) {
            
            assert = false;
            globalState++;
            this.click();
        }
        //console.log(randomNumberZones);
    });
    formElement.appendChild(buttonSubmit);
    formElement.appendChild(buttonSave);

    CONTAINER_TO_PRINT.appendChild(formElement);

    // let input = createElementWithTextNode("input", null, {class: "form-control mt-5"});
    // let div = createElementWithTextNode("div", input);

    // const DATA = fetchData();

    // async function fetchData() {
        
    //     const token = localStorage.getItem("auth_token");
    //     const apiUrl = baseUrl+"api/services";
    //     const requestOptions = {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     };
    //     try {
    //         const response = await fetch(apiUrl, requestOptions);
    //         if (!response.ok) {
    //             throw new Error("Error al enviar la solicitud");
    //         }
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // console.log(DATA);

    // console.log(DATA.then((responseResult) => {
    //     responseResult.forEach(element => {
    //         console.log(element);
    //         // for (const attribute in element) {

    //         //     console.log(element[attribute])
    //         // }

    //         let serviceImage = createElementWithTextNode("img", null, {src: `${element["image"]}`, class: "image-service"})
    //         let serviceContainer = createElementWithTextNode("div", serviceImage, {class: "image-container"});

    //         let dataLineTitle = createElementWithTextNode("h1", `${element["name"]}`);
    //         //dataLineTitle.appendChild();
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
    // }))
}