import axios from 'axios';
import { baseURL } from './URL';

const API = axios.create({
  baseURl: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postText = async (text) => {
  try {
    const { data } = await API.post('add url', JSON.stringify(text));
    return data;
  } catch (error) {
    console.log(error);
  }
};
