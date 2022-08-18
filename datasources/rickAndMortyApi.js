const { RESTDataSource } = require('apollo-datasource-rest');

class RickAndMortyAPI extends RESTDataSource {

  constructor() {
  
    super();
    this.baseURL = 'https://rickandmortyapi.com/api/';
  
  }
  
  async getCharacters(page, filter) {
  
    if (!page && !filter) {
    
      return this.get('character');
    
    } else {
    
      let queries = `?${page ? `page=${page}` : ''}`
      
      for (let key in filter) {
      
        queries += `&${key}=${filter[key]}`
      
      }
      
      return this.get('character' + queries)
    
    }
  
  }

}

module.exports = RickAndMortyAPI;
