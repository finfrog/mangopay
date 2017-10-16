var httpClient = require("../lib/httpClient"),
  httpMethod = require("../lib/httpMethod");

module.exports = httpClient.extend({
  path: "kyc",

  includeBasic: [],

  methods: {
    fetch: httpMethod({
      method: "GET",
      path: "../kyc/documents/{Id}",
      params: {
        Id: { required: true }
      }
    })
  }
});
