// Initialize an array with default comment objects

const showsArray = [
    { header: "DATE", date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
    { header: "VENUE", date: "Tue Sept 21 2021 ", venue: "Pier 3 East ", location: "San Francisco, CA" },
    { header: "LOCATION", date: "Fri Oct 15 2021 ", venue: "View Lounge ", location: "San Francisco, CA" },
    { date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA " },
    { date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA " },
    { date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA"}
]

function displayComment(comment){

    const showsContainer = document.querySelector('.shows__list');

    showsArray.forEach((i) => {
        const pDiv = document.createElement('div');
        pDiv.classList.add("shows__div");
        const pDiv2 = document.createElement('div');
        pDiv2.classList.add("shows__div2");
        const pTag = document.createElement('p');
        pTag.textContent = i.header;
        const pTag2 = document.createElement('p');
        pTag2.textContent = i.date;
        const pTag3 = document.createElement('p');
        pTag3.textContent = i.venue;
        const pTag4 = document.createElement('p');
        pTag4.textContent = i.location;
        const button = document.createElement('button');
        button.classList.add("shows__button");
        button.textContent = "BUY TICKETS";
        pDiv.appendChild(pTag);
        pDiv2.appendChild(pTag2);
        pDiv2.appendChild(pTag3);
        pDiv2.appendChild(pTag4);
        pDiv2.appendChild(button);
        
        showsContainer.appendChild(pDiv);
        showsContainer.appendChild(pDiv2);
    })

}

displayComment();