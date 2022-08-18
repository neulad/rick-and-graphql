const { DataSource } = require('apollo-datasource');

class CharactersDataSource extends DataSource {

  constructor() {
    
    super();
  
  }
  
  async createCharacter(character, Character) {
  
    try {
      
      return await Character.create({
      
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender
      
      })
    
    } catch (error) {
    
      return error;
    
    }
  
  } 

}

module.exports = CharactersDataSource;
