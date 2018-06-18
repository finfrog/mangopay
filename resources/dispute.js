let httpClient = require("../lib/httpClient"),
  httpMethod = require("../lib/httpMethod");

module.exports = httpClient.extend({
  path: "disputes",

  includeBasic: [],

  methods: {
    fetch: httpMethod({
      method: "GET",
      path: "../disputes/{Id}",
      params: {
        Id: { required: true }
      }
    })
  }
});
