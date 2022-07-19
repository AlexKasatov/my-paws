import axios from 'axios';
import config from './config.json';

axios.defaults.baseURL = config.apiEndPoint;
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export default class HttpService {
        // get all breeds data
        static async getBreeds() {
                const res = await axios('breeds');
                return res.data;
        }

        // get single breed data by ID
        static async getImageById(id, limit) {
                const res = await axios(`images/search`, {
                        params: {
                                breed_id: id,
                                limit,
                        },
                });
                return res.data;
        }

        // use for gallery query
        static async getImages(limit = 5) {
                const res = await axios(`images/search`, {
                        params: {
                                limit,
                        },
                });
                return res.data;
        }

        // use for gallery query
        static async getImagesByType(type = 'gif,jpg,png') {
                const res = await axios(`images/search`, {
                        params: {
                                mime_types: type,
                        },
                });
                return res.data;
        }

        // use for gallery query
        static async getImagesByOrder(order = 'RANDOM') {
                const res = await axios(`images/search`, {
                        params: {
                                order,
                        },
                });
                return res.data;
        }
}

// https://api.thecatapi.com/v1/images/search?breed_ids=abys&limit=5
