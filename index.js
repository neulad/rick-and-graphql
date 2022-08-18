const { ApolloServer } = require('apollo-server');
const RickAndMortyAPI = require('./datasources/rickAndMortyApi');
const CharactersDataSource = require('./datasources/charactersDataSource');
const Character = require('./models/character');
const resolvers = require('./resolvers');
const typeDefs = require('./types');
require('./config');

const server = new ApolloServer({

  typeDefs, 
  resolvers,
  dataSources: () => {
  
    return {
    
      rickAndMortyApi: new RickAndMortyAPI(),
      charactersDataSource: new CharactersDataSource()
      
    }
  
  },
  
  context: () => {
  
    return {
    
      Character: require('./models/character')
    
    }
  
  }
  
});

server.listen(3000)

  .then(({ url }) => {
  
    console.log(`🚀  Server ready at ${url}`);
  
  }) 
































