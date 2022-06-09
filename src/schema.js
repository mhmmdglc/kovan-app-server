const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query { 
       itemsForBikes: Item!
    }

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
`;

module.exports = typeDefs;