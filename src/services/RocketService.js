import axios from 'axios';
import { SERVICES_URL } from './SPACEX_SERVICES_URL';

const serviceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

const rocketService = {
  get: (rocketId) => api.get(`${serviceUrl}/${rocketId}`)
};

export default rocketService;
