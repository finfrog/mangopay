var httpClient = require("../lib/httpClient"),
  httpMethod = require("../lib/httpMethod");

module.exports = httpClient.extend({
  path: "payouts",

  includeBasic: [],

  methods: {
    fetch: httpMethod({
      method: "GET",
      path: "/{Id}",
      params: {
        Id: { required: true }
      }
    })
  }
});
