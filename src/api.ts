import axios from 'axios';
// import queryString from 'querystring';
import { URLSearchParams } from 'url';

async function publicCall(path: string, data: any, method = 'GET') {
  try {
    // const qs = data ? `?${queryString.stringify(data)}` : '';
    const params = new URLSearchParams(data);
    const qs = data ? `?${params}` : '';

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

// async function depth(symbol = 'GMTUSDT', limit = 5) {
//   return publicCall('/v3/depth', { symbol, limit });
// }

// async function CurrentAveragePrice(symbol = 'GMTUSDT') {
//   return publicCall('/v3/avgPrice', { symbol });
// }

export { time, publicCall };
