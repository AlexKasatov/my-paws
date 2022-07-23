/* eslint-disable camelcase */
import axios from 'axios';
import config from './config.json';

axios.defaults.baseURL = config.apiEndPoint;
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export default class HttpService {
        // get all breeds data
        static async getBreeds(limit) {
                const res = await axios('breeds', {
                        params: {
                                limit,
                        },
                });
                return res.data;
        }

        // get single breed data by ID
        static async getImageByBreedId(id) {
                const res = await axios(`images/search`, {
                        params: {
                                breed_id: id,
                                limit: 5,
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

        // like or dislike image
        static async vote(id, value, sub_id) {
                const res = await axios.post(`votes`, {
                        image_id: id,
                        value,
                        sub_id,
                });
                return res.data;
        }

        // get voted data  likes & dislikes (images aren't included)
        static async getVotes(sub_id) {
                const res = await axios(`votes?sub_id=${sub_id}`);
                return res.data;
        }

        // add to favourites
        static async addFavourites(id, sub_id) {
                const res = await axios.post(`favourites`, {
                        image_id: id,
                        sub_id,
                });
                return res.data;
        }

        // delete from favourites
        static async deleteFavourites(id) {
                const res = await axios.delete(`favourites/${id}`);
                return res.data;
        }

        // get favourites data (images included)
        static async getFavourites(sub_id) {
                const res = await axios('favourites', {
                        params: {
                                sub_id,
                        },
                });
                return res.data;
        }

        // upload image to API for recognition
        static async uploadImage(formData, sub_id) {
                const res = await axios.post(
                        'images/upload',
                        formData,
                        {
                                headers: { 'Content-Type': 'multipart/form-data' },
                        },
                        {
                                params: {
                                        sub_id,
                                },
                        }
                );
                return res.data;
        }
}
