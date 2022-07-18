import axios from 'axios';
import config from './config.json';

axios.defaults.baseURL = config.apiEndPoint;
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export default class HttpService {
        static async getBreeds() {
                const res = await axios('breeds');
                return res.data;
        }

        static async getImageById(id, limit) {
                const res = await axios(`images/search`, {
                        params: {
                                breed_id: id,
                                limit,
                        },
                });
                return res.data;
        }
}

// https://api.thecatapi.com/v1/images/search?breed_ids=abys&limit=5
