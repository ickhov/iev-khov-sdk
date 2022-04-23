/* eslint-disable no-undef */
import { expect } from 'chai';
import { build } from '../hooks.js';

const baseURL = '/api/ping';

describe(`GET ${baseURL}`, () => {
  describe('success', () => {
    it('should return an object', async () => {
      const app = build();
      // call the API with the access token
      const res = await app.inject({
        method: 'GET',
        url: baseURL,
      });
      const response = res.json();
      // check for the correct statusCode value
      expect(res.statusCode).to.equal(200);
      // check for the correct keys
      expect(response).to.have.all.keys('success');
      // check for the correct error message
      expect(response.success).to.be.true;
    });
  });
});
