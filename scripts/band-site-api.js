export class BandSiteAPI {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com/";
    }
}

// function postComment(comment){
//     return new Promise((resolve, reject) => {
//         const response = axios.post(`${this.baseURL}/comments${this.apiKey}`, comment);
//         if(response){
//             console.log(response);
//             resolve(response);
//         }else {
//             reject("Comment failed to post.")
//         }
//     })
// }

async function postComment(comment){
    try {
        const response = await axios.post(`${this.baseURL}/comments${this.apiKey}`, comment);
    } catch (error){
        console.log(error);
    }
}

async function getComments() {
    try {
        const response = await axios.get(`${this.baseURL}/comments${this.apiKey}`);
        console.log(response.data);
    } catch (error){
        console.log(error);
    }
}

async function getShows() {
    try {
        const response = await axios.get(`${this.baseURL}/comments${this.apiKey}`);
        const showData = [];
    } catch(error) {
        console.log("Error while retrieving shows", error);
        return error;
    }
}