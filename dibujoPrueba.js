// script.js
const cutsData = {
    "Huachalomo": {
        textura: "Tierna y jugosa, con algo de fibra que le aporta firmeza.",
        sabor: "Intenso y sabroso, con un gusto característico de cortes cercanos a la costilla.",
        metodosDeCoccion: "Ideal para la parrilla o el horno, aunque también se adapta bien al sartén.",
        platosTradicionales: "Usado en charquicán, cazuelas y estofados chilenos.",
        consejosDeCoccion: [
            "Cocinar a fuego medio en la parrilla para mantener jugosidad.",
            "Dejar reposar tras la cocción y cortar contra la fibra para mayor suavidad."
        ]
    },
    "LomoVetado": {
        textura: "Mantecoso y suave, con vetas de grasa que lo hacen más jugoso.",
        sabor: "Sabroso y con un toque marinado por la grasa, ideal para asados.",
        metodosDeCoccion: "Excelente para la parrilla, sartén o incluso al horno.",
        platosTradicionales: "Frecuentemente usado en asados y como carne para empanadas.",
        consejosDeCoccion: [
            "No sobrecocinar para evitar que pierda jugosidad.",
            "Dejar reposar antes de cortar para que los jugos se distribuyan."
        ]
    },
    "LomoLiso": {
        textura: "Magro y tierno, de textura firme pero suave al comer.",
        sabor: "Sabor suave, ideal para quienes prefieren carnes menos grasas.",
        metodosDeCoccion: "Perfecto para la parrilla, sartén o al horno, se recomienda a la plancha o al sartén para mantener su jugosidad.",
        platosTradicionales: "Ideal para preparaciones como milanesa o para hacer carne al jugo.",
        consejosDeCoccion: [
            "Evitar sobrecocinar para mantener la suavidad.",
            "Sellar a fuego fuerte para preservar los jugos internos."
        ]
    },
    "Filete": {
        textura: "Extremadamente tierno, sin grasa visible, lo que lo convierte en un corte muy magro.",
        sabor: "Sabor suave y delicado, ideal para quienes buscan cortes sin mucha grasa.",
        metodosDeCoccion: "Se recomienda cocinarlo al sartén, a la parrilla o al horno.",
        platosTradicionales: "Se utiliza en preparaciones como filete a la pimienta, filete a la plancha o como carne para brochetas.",
        consejosDeCoccion: [
            "No cocinar demasiado para que no pierda su suavidad.",
            "Dejar reposar unos minutos antes de cortarlo."
        ]
    },
    "PuntaDeGanso": {
        textura: "Fibrosa, pero muy jugosa cuando se cocina lentamente.",
        sabor: "Sabor profundo, muy típico de cortes con más músculo.",
        metodosDeCoccion: "Ideal para cocciones largas como estofados, guisos o al horno a baja temperatura.",
        platosTradicionales: "Perfecto para preparaciones como cazuelas, estofados o asados al horno.",
        consejosDeCoccion: [
            "Cocinar a fuego bajo para ablandar las fibras.",
            "Es recomendable dejar reposar la carne después de la cocción."
        ]
    },
    "Asiento": {
        textura: "Corte jugoso y tierno, con algo de grasa que lo hace sabroso.",
        sabor: "Sabor fuerte y sabroso, muy popular para asados.",
        metodosDeCoccion: "Ideal para la parrilla o el asador.",
        platosTradicionales: "Común en preparaciones como el asado a la parrilla o en la tradicional cazuela chilena.",
        consejosDeCoccion: [
            "Cocinar lentamente a fuego medio para no secar la carne.",
            "Dejar reposar antes de cortar para que se mantengan los jugos."
        ]
    },
    "Ganso": {
        textura: "Fibrosa, pero de sabor profundo y jugoso.",
        sabor: "El sabor es característico y más fuerte debido a su mayor contenido de tejido conectivo.",
        metodosDeCoccion: "Ideal para estofados, guisos o cocciones largas.",
        platosTradicionales: "Frecuentemente usado en cazuelas, charquicán y estofados.",
        consejosDeCoccion: [
            "Cocinar a fuego bajo para ablandar las fibras.",
            "Cortar en piezas más pequeñas para una cocción uniforme."
        ]
    },
    "PuntaPicana": {
        textura: "Tierna y jugosa, con una buena distribución de grasa.",
        sabor: "Sabor intenso, con un toque suave gracias a su veteado de grasa.",
        metodosDeCoccion: "Se recomienda asar a la parrilla o al horno.",
        platosTradicionales: "Ideal para el asado chileno o para preparaciones como brochetas.",
        consejosDeCoccion: [
            "Cocinar a fuego medio para asegurar una cocción uniforme.",
            "Dejar reposar para redistribuir los jugos internos."
        ]
    },
    "Osobuco": {
        textura: "Carne muy jugosa y con hueso central que aporta sabor.",
        sabor: "Sabor profundo y untuoso, muy apreciado en preparaciones largas.",
        metodosDeCoccion: "Requiere cocción lenta, ideal para estofados, guisos o al horno.",
        platosTradicionales: "Usado en el clásico osobuco estofado o guisos.",
        consejosDeCoccion: [
            "Cocinar a fuego muy bajo por varias horas para obtener carne tierna.",
            "El caldo del estofado es excelente para acompañar arroz o pasta."
        ]
    },
    "PostaRosada": {
        textura: "Firme, pero jugosa y tierna.",
        sabor: "Sabor suave, pero con una ligera intensidad.",
        metodosDeCoccion: "Ideal para la parrilla, al horno o al sartén.",
        platosTradicionales: "Muy utilizada en preparaciones como el charquicán y la cazuela.",
        consejosDeCoccion: [
            "Sellar a fuego fuerte para conservar la jugosidad.",
            "No sobrecocinar para evitar que se seque."
        ]
    },
    "Abastero": {
        textura: "Fibrosa, de carne muy sabrosa y algo firme.",
        sabor: "Sabor muy fuerte, típico de los cortes de carne más magros.",
        metodosDeCoccion: "Ideal para guisos, estofados o para preparar carne mechada.",
        platosTradicionales: "Perfecto para preparaciones como la carne mechada o en cazuelas.",
        consejosDeCoccion: [
            "Cocinar a fuego lento para ablandar la carne.",
            "Desmenuzar tras la cocción para hacer preparaciones como la carne mechada."
        ]
    },
    "PolloGanso": {
        textura: "Fibrosa, algo más dura que otros cortes de carne.",
        sabor: "Sabor fuerte, con notas características de carne más magra.",
        metodosDeCoccion: "Ideal para cocciones largas como estofados o guisos.",
        platosTradicionales: "Se utiliza en cazuelas o guisos.",
        consejosDeCoccion: [
            "Cocinar lentamente a fuego bajo para mantener la carne jugosa.",
            "No sobrecocinar para evitar que la carne se vuelva dura."
        ]
    },
    "Tapabariga": {
        textura: "Firme y jugosa, con un veteado de grasa.",
        sabor: "Sabor intenso y sabroso, especialmente cuando se cocina a la parrilla.",
        metodosDeCoccion: "Perfecto para parrilladas, asados o al horno.",
        platosTradicionales: "Ideal para asados o como parte de un plateado.",
        consejosDeCoccion: [
            "Cocinar a fuego medio para evitar que se seque.",
            "Dejar reposar antes de cortar para mantener la jugosidad."
        ]
    },
    "Estomaguillo": {
        textura: "Firme y fibrosa, aunque muy jugosa cuando se cocina correctamente.",
        sabor: "Sabor profundo, ideal para preparaciones de cocción lenta.",
        metodosDeCoccion: "Requiere cocción larga, ideal para estofados o guisos.",
        platosTradicionales: "Muy usado en cazuelas y estofados.",
        consejosDeCoccion: [
            "Cocinar a fuego bajo para que la carne se ablande.",
            "Usar caldo para intensificar el sabor."
        ]
    },
    "Palanca": {
        textura: "Fibrosa, muy jugosa cuando se cocina a fuego lento.",
        sabor: "Sabor robusto, característico de cortes de carne más musculosa.",
        metodosDeCoccion: "Ideal para guisos, cazuelas o carne a la olla.",
        platosTradicionales: "Usada comúnmente en cazuelas y estofados.",
        consejosDeCoccion: [
            "Cocinar durante largo tiempo a fuego bajo.",
            "Dejar reposar antes de cortar para que los jugos se distribuyan."
        ]
    },
    "Malaya": {
        textura: "Firme y fibrosa, con un sabor muy característico.",
        sabor: "Sabor potente, a menudo más intenso debido a su alto contenido en tejidos conectivos.",
        metodosDeCoccion: "Ideal para estofados, cazuelas o a la parrilla.",
        platosTradicionales: "Frecuentemente usada en guisos y como carne para preparar empanadas.",
        consejosDeCoccion: [
            "Cocinar a fuego lento para ablandar la carne.",
            "Usar mucho líquido para obtener un buen caldo."
        ]
    },
    "Plateada": {
        textura: "Fibrosa y jugosa, especialmente si se cocina lentamente.",
        sabor: "Sabor robusto y característico, ideal para quienes disfrutan de un corte más sabroso.",
        metodosDeCoccion: "Excelente para cocción lenta, ideal para asados, guisos o estofados.",
        platosTradicionales: "Usada en el tradicional asado chileno, cazuelas y charquicán.",
        consejosDeCoccion: [
            "Cocinar a fuego lento para obtener una carne más tierna.",
            "Dejar reposar para redistribuir los jugos."
        ]
    },
    "SobreCostilla": {
        textura: "Carne fibrosa, con un buen veteado de grasa que le da jugosidad.",
        sabor: "Sabor muy intenso, característico de los cortes con hueso.",
        metodosDeCoccion: "Ideal para parrilladas, asados y preparaciones al horno.",
        platosTradicionales: "Frecuentemente usada en parrilladas y asados.",
        consejosDeCoccion: [
            "Cocinar a fuego medio para obtener la mejor textura.",
            "Sellar bien la carne antes de cocinarla completamente."
        ]
    },
    "PostaPaleta": {
        textura: "Firme y algo fibrosa, ideal para cocciones lentas.",
        sabor: "Sabor intenso, muy adecuado para guisos o estofados.",
        metodosDeCoccion: "Cocción lenta es clave, ideal para estofados o al horno.",
        platosTradicionales: "Usada en estofados, cazuelas y charquicán.",
        consejosDeCoccion: [
            "Cocinar lentamente para ablandar la carne.",
            "Usar mucha salsa o caldo para obtener un buen guiso."
        ]
    },
    "PuntaPaleta": {
        textura: "Fibrosa, pero muy jugosa y sabrosa cuando se cocina bien.",
        sabor: "Sabor profundo y robusto, con una textura más firme que otros cortes.",
        metodosDeCoccion: "Ideal para asados, parrilladas o guisos.",
        platosTradicionales: "Frecuentemente usada en guisos y en el tradicional asado chileno.",
        consejosDeCoccion: [
            "Cocinar a fuego bajo para obtener una carne más tierna.",
            "Dejar reposar antes de cortar para asegurar la jugosidad."
        ]
    },
    "Choclillo": {
        textura: "Muy jugoso y sabroso, especialmente cuando se cocina lentamente.",
        sabor: "Sabor suave y ligeramente dulce, típico de los cortes de carne más magros.",
        metodosDeCoccion: "Ideal para estofados y cazuelas.",
        platosTradicionales: "Frecuentemente usado en cazuelas y guisos.",
        consejosDeCoccion: [
            "Cocinar lentamente para conservar la jugosidad.",
            "Asegurarse de cortar la carne en trozos pequeños para una cocción uniforme."
        ]
    },
    "AsadoCarnicero": {
        textura: "Carne con una mezcla de fibras y grasa, ideal para asados.",
        sabor: "Sabor profundo y sabroso, muy apreciado en los asados.",
        metodosDeCoccion: "Perfecto para parrilladas o asados.",
        platosTradicionales: "Comúnmente usado en parrilladas y en el tradicional asado chileno.",
        consejosDeCoccion: [
            "Cocinar lentamente para que la grasa se derrita y la carne quede tierna.",
            "Mantener la temperatura moderada para evitar que la carne se seque."
        ]
    },
    "Tapapecho": {
        textura: "Firme, pero jugosa debido al contenido graso.",
        sabor: "Sabor muy sabroso y característico, con buena cantidad de grasa.",
        metodosDeCoccion: "Ideal para parrilladas o asados.",
        platosTradicionales: "Utilizado en asados y parrilladas.",
        consejosDeCoccion: [
            "Cocinar a fuego medio para evitar que se seque.",
            "Dejar reposar unos minutos antes de cortarlo."
        ]
    }
};


// Función para actualizar el info-box con la información del corte seleccionado
// Función para actualizar el info-box con la información del corte seleccionado
function updateInfoBox(cutId) {
    const cutInfo = cutsData[cutId];  // Obtener los datos del corte de carne seleccionado
    
    if (cutInfo) {
        // Actualizamos los elementos del info-box con la información del corte
        document.getElementById("textura").textContent = cutInfo.textura;
        document.getElementById("sabor").textContent = cutInfo.sabor;
        document.getElementById("metodosDeCoccion").textContent = cutInfo.metodosDeCoccion;
        document.getElementById("platosTradicionales").textContent = cutInfo.platosTradicionales;

        // Limpiamos y agregamos los consejos de cocción
        const cookingTipsList = document.getElementById("consejosDeCoccion");
        cookingTipsList.innerHTML = ''; // Limpiar la lista

        // Agregamos los consejos de cocción (cada consejo es un elemento <li>)
        cutInfo.consejosDeCoccion.forEach(tip => {
            const listItem = document.createElement("li");
            listItem.textContent = tip;
            cookingTipsList.appendChild(listItem);
        });

        // Mostrar el info-box
        document.getElementById("info-box").style.display = "block";
    }
}

// Función para cerrar el info-box
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("info-box").style.display = "none";
});

// Agregar eventos de clic a cada path de carne
document.getElementById("Huachalomo").addEventListener("click", function() {
    updateInfoBox("Huachalomo");
});


document.getElementById("LomoVetado").addEventListener("click", function() {
    updateInfoBox("LomoVetado");
});

document.getElementById("LomoLiso").addEventListener("click", function() {
    updateInfoBox("LomoLiso");
});

document.getElementById("Filete").addEventListener("click", function() {
    updateInfoBox("Filete");
});

document.getElementById("PuntaDeGanso").addEventListener("click", function() {
    updateInfoBox("PuntaDeGanso");
});

document.getElementById("Asiento").addEventListener("click", function() {
    updateInfoBox("Asiento");
});

document.getElementById("Ganso").addEventListener("click", function() {
    updateInfoBox("Ganso");
});

document.getElementById("PuntaPicana").addEventListener("click", function() {
    updateInfoBox("PuntaPicana");
});

document.getElementById("Osobuco").addEventListener("click", function() {
    updateInfoBox("Osobuco");
});

document.getElementById("PostaRosada").addEventListener("click", function() {
    updateInfoBox("PostaRosada");
});

document.getElementById("Abastero").addEventListener("click", function() {
    updateInfoBox("Abastero");
});

document.getElementById("PolloGanso").addEventListener("click", function() {
    updateInfoBox("PolloGanso");
});

document.getElementById("Tapabariga").addEventListener("click", function() {
    updateInfoBox("Tapabariga");
});

document.getElementById("Estomaguillo").addEventListener("click", function() {
    updateInfoBox("Estomaguillo");
});

document.getElementById("Palanca").addEventListener("click", function() {
    updateInfoBox("Palanca");
});

document.getElementById("Malaya").addEventListener("click", function() {
    updateInfoBox("Malaya");
});

document.getElementById("Plateada").addEventListener("click", function() {
    updateInfoBox("Plateada");
});

document.getElementById("SobreCostilla").addEventListener("click", function() {
    updateInfoBox("SobreCostilla");
});

document.getElementById("PostaPaleta").addEventListener("click", function() {
    updateInfoBox("PostaPaleta");
});

document.getElementById("PuntaPaleta").addEventListener("click", function() {
    updateInfoBox("PuntaPaleta");
});

document.getElementById("Choclillo").addEventListener("click", function() {
    updateInfoBox("Choclillo");
});

document.getElementById("AsadoCarnicero").addEventListener("click", function() {
    updateInfoBox("AsadoCarnicero");
});

document.getElementById("Tapapecho").addEventListener("click", function() {
    updateInfoBox("Tapapecho");
});



