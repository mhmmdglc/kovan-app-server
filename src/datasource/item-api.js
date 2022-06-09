const { RESTDataSource } = require('apollo-datasource-rest');

class ItemAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://kovan-dummy-api.herokuapp.com/';
    }

    getItem() {
        return this.get('items');
    }

}

module.exports = ItemAPI;