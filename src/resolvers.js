const resolvers = {
    Query: {
        itemsForBikes: (_, __, { dataSources }) => {
            return dataSources.itemAPI.getItem();
        },
    }
};

module.exports = resolvers;
