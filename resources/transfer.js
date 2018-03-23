let httpClient = require("../lib/httpClient"),
  httpMethod = require("../lib/httpMethod");

module.exports = httpClient.extend({
  path: "transfers",

  includeBasic: [],

  methods: {
    fetch: httpMethod({
      method: "GET",
      path: "../transfers/{Id}",
      params: {
        Id: { required: true }
      }
    })
  }
});
