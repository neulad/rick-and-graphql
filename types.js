const { gql } = require('apollo-server');

module.exports = gql`

  enum Status {
  
    ALIVE
    DEAD
    UNKNOWN
  
  }
  
  enum Gender {
  
    FEMALE
    MALE
    GENDERLESS
    UNKNOWN
  
  }
  
  input FilterCharacter {
  
    "Name of the character"
    name: String
    
    "Is a hero alive, dead or unknown"
    status: String
    
    "Is he a human or something else"
    species: String
    
    "Is it a woman, man or something else"
    gender: String
    
    
  }

  type Character {
    
    name: String!
    status: Status
    species: String
    gender: Gender
    
  }
  
  input CharacterInput {
  
    name: String!
    status: Status
    species: String
    gender: Gender
  
  }


  type Query {
  
    characters(page: Int, filter: FilterCharacter): [Character]!
    
  }
  
  type Mutation {
  
    addCharacter(character: CharacterInput!): Character
  
  }

`
