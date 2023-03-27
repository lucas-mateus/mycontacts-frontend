import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'desc') {
    // Put the path you want to do a request to the server
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`);
  }

  async createContact(contatc) {
    return this.httpClient.post('/contacts', contatc);
  }
}

export default new ContactsService();
