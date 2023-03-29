let courses = [
    {
        id: 1,
        title: "Java for Dummies",
        numPages: 400,
        forBeginners: true,
        cost: 40.00
    },

    {
        id: 2,
        title: "Php for Dummies",
        numPages: 500,
        forBeginners: true,
        cost: 10.00
    },

    {
        id: 3,
        title: "JavaScript for Experts",
        numPages: 300,
        forBeginners: false,
        cost: 30.00
    }
];

/*let tableBody = document.getElementById("tableBody");

courses.forEach(course => {
    let newRow = tableBody.insertRow();

    let idCell = newRow.insertCell();
    let titleCell = newRow.insertCell();
    let pagesCell = newRow.insertCell();
    let levelCell = newRow.insertCell();
    let priceCell = newRow.insertCell();

    idCell.innerText = course.id;
    titleCell.innerText = course.title;
    pagesCell.innerText = course.numPages;
    levelCell.innerText = course.forBeginners ? "Beginner" : "Expert";
    priceCell.innerText = course.cost;
});*/



let table = document.createElement("table");

// Crea l'intestazione della tabella
let headerRow = document.createElement("tr");
for (let property in courses[0]) {
    let headerCell = document.createElement("th");
    let headerText = document.createTextNode(property);
    headerCell.appendChild(headerText);
    headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// Aggiunge le righe della tabella
courses.forEach((course) => {
    let row = document.createElement("tr");
    for (let property in course) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(course[property]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    table.appendChild(row);
});

// Aggiunge la tabella al DOM
document.body.appendChild(table);


/*
rifarlo con oggetto table gerator, avrà come metodi:
1. init che passa id di tabella esistente e array di dati con cui lavorare 
2. generateTable metodo per generare la tabella in maniera dinamica a partire dai dati all'interno
    deve chiamare al suo interno 2 metodi: generateHeader e generateRow
 */
    



/*
far popolare tramite js la tabella in HTML 
con i dati dell'oggetto


2 modi:

-----1
innerHTML

-----2
DOM API HTML
come creare nuovi nodi - dai testo - inserirsci nella pagina

*/