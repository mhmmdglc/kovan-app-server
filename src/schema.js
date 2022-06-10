const { gql } = require('apollo-server');

const typeDefs = gql`
   
    type Item{
        last_updated: Int
        ttl: Int
        total_count: Int
        nextPage: Boolean
        data: Data
    }
  
    type Data {
        bikes: [Bike]
    }
    type Bike {
        bike_id: String
        is_reserved: Boolean
        vehicle_type: String
        total_bookings: String
        android: String
        ios: String
    }

    input LoginInput {
        username: String
        password: String
    }

    type Query { 
        itemsForBikes: Item!
        }

    type User{
        id: String
        username: String
        password: String
        token: String
    }
    type Mutation {
         loginUser(loginInput: LoginInput): User
         }
`;

module.exports = typeDefs;