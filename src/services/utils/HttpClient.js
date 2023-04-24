import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

class HttpCliente {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);

    let body = null;
    const response = await fetch(`${this.baseURL}${path}`);
    const contentType = response.headers.get('content-type');

    if (contentType.includes('application/json')) {
      body = await response.json();
    }
    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }

  async post(contact, path) {
    const response = await fetch(`${this.baseURL}${path}`, contact);
    await delay(1000);
    return response.json();
  }
}

export default HttpCliente;
