let httpClient = require('../lib/httpClient'),
  httpMethod = require('../lib/httpMethod')

module.exports = httpClient.extend({
  path: 'repudiations',

  includeBasic: [],

  methods: {
    fetch: httpMethod({
      method: 'GET',
      path: '../repudiations/{Id}',
      params: {
        Id: { required: true },
      },
    }),
  },
})
