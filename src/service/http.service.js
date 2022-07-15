import axios from 'axios';
import config from './config.json';

axios.defaults.baseURL = config.apiEndPoint;
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export default class HttpService {
        static async getBreeds(params) {
                const res = await axios('breeds?limit=20');
                return res.data;
        }
}
