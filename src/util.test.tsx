import { makeRequest, getBaseRequestParameters } from "./utils";


describe('util works', () => {
  
  it('get base request parameters', () => {
    expect(getBaseRequestParameters()).toHaveProperty('API_URL')
    expect(getBaseRequestParameters()).toHaveProperty('API_URL', 'https://rickandmortyapi.com/api/')
  })
  
  it('the fetch characters', () => {
    return makeRequest('character', 'page=1')
      .then(data => {
        expect(data).toHaveProperty('results')
        expect(data).toHaveProperty('info')
      });
  });
  
  it('the fetch fails with an error', () => {
    return makeRequest('charactersfasf', 'page=-12')
      .then(data => {
        expect(data).toHaveProperty('error')
      });
  });
  
})
