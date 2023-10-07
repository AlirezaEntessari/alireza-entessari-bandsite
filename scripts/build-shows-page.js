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
        const pTag = document.createElement('p');
        pTag.textContent = i.header;
        const pTag2 = document.createElement('p');
        pTag2.textContent = i.date;
        const pTag3 = document.createElement('p');
        pTag3.textContent = i.venue;
        const pTag4 = document.createElement('p');
        pTag4.textContent = i.location;
        pDiv.appendChild(pTag);
        pDiv.appendChild(pTag2);
        pDiv.appendChild(pTag3);
        pDiv.appendChild(pTag4);
        showsContainer.appendChild(pDiv);
    })

}

displayComment();