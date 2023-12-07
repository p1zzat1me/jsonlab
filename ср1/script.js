class discipline {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const disciplines = [];

async function fill() {
    const requestURL = "https://api.jsonbin.io/v3/b/656ef7b80574da7622d077f7";
    try {
        const response = await fetch(requestURL);
        if (response.ok) {
            const data = await response.json();
            newDiscipline(data.record);
            showDisciplines();
        } else {
            throw new Error("Error fetching data");
        }
    } catch (error) {
        console.error(error);
        alert("Error fetching data");
    }
}

function newDiscipline(obj) {
    let dsc = obj;
    for (let a of dsc) {
        let dis = new discipline(a.name, a.type);
        disciplines.push(dis);
    }
}

function showDisciplines() {
    const main = document.querySelector("article");

    const medicalEducation = document.createElement("div");
    medicalEducation.classList.add("education-group");

    const computerScienceEducation = document.createElement("div");
    computerScienceEducation.classList.add("education-group");

    const philosophyEducation = document.createElement("div");
    philosophyEducation.classList.add("education-group");

    for (let a of disciplines) {
        const listItem = document.createElement("li");
        listItem.textContent = a.name;

        if (a.type === "Медицина") {
            medicalEducation.appendChild(listItem);
        } else if (a.type === "Комп'ютерні науки") {
            computerScienceEducation.appendChild(listItem);
        } else if (a.type === "Філософія") {
            philosophyEducation.appendChild(listItem);
        }
    }

    main.appendChild(document.createElement("h2")).textContent = "Медицина";
    main.appendChild(medicalEducation);

    main.appendChild(document.createElement("h2")).textContent = "Комп'ютерні науки";
    main.appendChild(computerScienceEducation);

    main.appendChild(document.createElement("h2")).textContent = "Філософія";
    main.appendChild(philosophyEducation);
}

fill();
