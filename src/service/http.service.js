/* eslint-disable camelcase */
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

        // get image by limits
        static async getImages(limit = 5) {
                const res = await axios(`images/search`, {
                        params: {
                                limit,
                        },
                });
                return res.data;
        }

        // use for fetch data for Gallery page
        static async getImagesForGallery(id, types = 'gif,jpg,png', order = 'RANDOM', limit = 10) {
                const res = await axios(
                        `images/search?limit=${limit}&mime_types=${types}&order=${order}&breed_id=${id}`
                );
                return res.data;
        }

        static async vote(id, value) {
                const res = await axios.post(`votes`, {
                        image_id: id,
                        value,
                });
                return res.data;
        }

        static async addFavourites(id) {
                const res = await axios.post(`favourites`, {
                        image_id: id,
                });
                return res.data;
        }
}

// https://api.thecatapi.com/v1/images/search?breed_ids=abys&limit=5
