export class BandSiteAPI {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";
    }

    likeComment() {

    }

    async postComment(comment){
        try {
            // const headers = {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }
            const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, comment); // add headers at end
            // console.log(response.data);
            console.log(this.getComments());
            return this.getComments().response.data; 
        } catch (error){
            console.log(error);
        }
    }
    
    async getComments() {
        try {
            const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
            return response.data;       // use .sort for getComments method
        } catch (error){
            console.log(error);
        }
    }
    
    async getShows() {
        try {
            const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    async 
}

// post. first: url, second: data, third: header

// try {
//     const headers = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// }

// const {data} = await axios.post('/user', document.querySelector('#my-form'), {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

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



// export { BandSiteAPI };