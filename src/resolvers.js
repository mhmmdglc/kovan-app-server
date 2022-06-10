const jwt = require('jsonwebtoken');
const { ApolloError } = require('apollo-server-errors');


const resolvers = {
    Query: {
        itemsForBikes: (_, __, { dataSources }) => {
            return dataSources.itemAPI.getItem();
        },
    },
    Mutation: {
        async loginUser(_, { loginInput: { username, password } }) {
            const userMockData = {
                _id: "23RF2RADFSDAF",
                username: "admin",
                password: "admin",
                token: ""
            }
            const userCheck = userMockData.username === username && userMockData.password === password;


            if (userCheck) {
                const token = jwt.sign(
                    { id: userMockData._id, },
                    "we-hired-you",
                    { expiresIn: "1h" }
                );
                userMockData.token = token;
                return {
                    id: userMockData._id,
                    username: userMockData.username,
                    password: userMockData.password,
                    token: userMockData.token
                }
            } else {
                throw new ApolloError("Invalid credentials");
            }
        }
    },
};

module.exports = resolvers;
