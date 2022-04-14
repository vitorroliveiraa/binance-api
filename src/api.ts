import axios from 'axios';
import queryString from 'querystring';
import { URLSearchParams } from 'url';

async function publicCall(path: string, data: any, method = 'GET') {
  try {
    const qs = data ? `?${data.URLSearchParams()}` : '';
    const result = await axios({
      method: 'GET',
      url: `${process.env.API_URL}${path}${qs}`,
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
}

async function time() {
  return publicCall('/v3/time', '');
}

export { time };
