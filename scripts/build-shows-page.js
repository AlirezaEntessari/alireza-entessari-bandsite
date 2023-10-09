// Initialize an array with default comment objects

const headersArray = [
    { header1: "DATE", header2: "VENUE", header3: "LOCATION" }
]

const showsArray = [
    { header1: "DATE", date: "Mon Sept 06 2021", header2: "VENUE", venue: "Ronald Lane", header3: "LOCATION", location: "San Francisco, CA" },
    { header1: "DATE", date: "Tue Sept 21 2021 ", header2: "VENUE", venue: "Pier 3 East ", header3: "LOCATION", location: "San Francisco, CA" },
    { header1: "DATE", date: "Fri Oct 15 2021 ", header2: "VENUE", venue: "View Lounge ", header3: "LOCATION", location: "San Francisco, CA" },
    { header1: "DATE", date: "Sat Nov 06 2021", header2: "VENUE", venue: "Hyatt Agency", header3: "LOCATION", location: "San Francisco, CA " },
    { header1: "DATE", date: "Fri Nov 26 2021", header2: "VENUE", venue: "Moscow Center", header3: "LOCATION", location: "San Francisco, CA " },
    { header1: "DATE", date: "Wed Dec 15 2021", header2: "VENUE", venue: "Press Club", header3: "LOCATION", location: "San Francisco, CA"}
]

function displayHeader(){

    const headersContainer = document.querySelector('.shows__header');

    headersArray.forEach((i) => {
        const hDiv = document.createElement('div');
        hDiv.classList.add("shows__header");
        const hTag = document.createElement('p');
        hTag.textContent = i.header1;
        hTag.classList.add("shows__hTag");
        const hTag2 = document.createElement('p');
        hTag2.textContent = i.header2;
        hTag2.classList.add("shows__hTag2");
        const hTag3 = document.createElement('p');
        hTag3.textContent = i.header3;
        hTag3.classList.add("shows__hTag3");
        hDiv.appendChild(hTag);
        hDiv.appendChild(hTag2);
        hDiv.appendChild(hTag3);

        headersContainer.appendChild(hDiv);

    })
}

displayHeader();


function displayComment(comment){

    const showsContainer = document.querySelector('.shows__list');

    showsArray.forEach((i) => {
        const pDiv = document.createElement('div');
        pDiv.classList.add("shows__div");
        const pTag = document.createElement('p');
        pTag.textContent = i.header1;
        pTag.classList.add("shows__pTag");
        const pTag2 = document.createElement('p');
        pTag2.textContent = i.date;
        pTag2.classList.add("shows__pTag2");
        const pTag3 = document.createElement('p');
        pTag3.textContent = i.header2;
        pTag3.classList.add("shows__pTag3");
        const pTag4 = document.createElement('p');
        pTag4.textContent = i.venue;
        pTag4.classList.add("shows__pTag4");
        const pTag5 = document.createElement('p');
        pTag5.textContent = i.header3;
        pTag5.classList.add("shows__pTag5");
        const pTag6 = document.createElement('p');
        pTag6.textContent = i.location;
        pTag6.classList.add("shows__pTag6");
        const button = document.createElement('button');
        button.classList.add("shows__button");
        button.textContent = "BUY TICKETS";
        pDiv.appendChild(pTag);
        pDiv.appendChild(pTag2);
        pDiv.appendChild(pTag3);
        pDiv.appendChild(pTag4);
        pDiv.appendChild(pTag5);
        pDiv.appendChild(pTag6);
        pDiv.appendChild(button);
        
        showsContainer.appendChild(pDiv);
    })

}

displayComment();

