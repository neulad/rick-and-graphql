module.exports = {

  Status: {
  
    ALIVE: 'Alive',
    DEAD: 'Dead',
    UNKNOWN: 'unknown' 
  
  },
  
  Gender: {
  
    FEMALE: 'Female',
    MALE: 'Male',
    GENDERLESS: 'Genderless',
    UNKNOWN: 'unknown'
  
  },
  
  Query: {
  
    characters: async (parent, args, { dataSources }) => {
    
      let characters = await dataSources
        .rickAndMortyApi.getCharacters(args.page, args.filter);
        
      return characters.results
    
    }
  
  },
  
  Mutation: {
  
    addCharacter: (parent, args, { dataSources, Character }) => {
    
      return dataSources
        .charactersDataSource.createCharacter(args.character, Character);
    
    }
  
  }

}
