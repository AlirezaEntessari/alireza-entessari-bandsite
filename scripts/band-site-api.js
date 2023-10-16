export class BandSiteAPI {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";
    }

    likeComment() {

    }

    async postComment(comment){
        try {
            const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, comment);
            console.log(this.getComments());
            return this.getComments().response.data;
        } catch (error){
            console.log(error);
        }
    }
    
    async getComments() {
        try {
            const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
            return response.data.sort();       
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

    
}
