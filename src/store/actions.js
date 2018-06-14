import axios from 'axios';

export default {
    async getArticles({ commit }) {
         const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${
             this.state.query
         }&origin=*`;

         const response = await axios.get(url);

         let articles = [];

         for (let i =0, j=response.data[1].length; i<j;i++){
             articles[i] = {
                 title: response.data[1][i],
                 snipped: response.data[2][i],
                 link: response.data[3][i]
             };
         }
         commit("articles", articles);
    }
}