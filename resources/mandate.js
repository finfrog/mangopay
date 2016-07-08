var httpClient = require('../lib/httpClient')
  , httpMethod = require('../lib/httpMethod')

module.exports = httpClient.extend({
  path: 'mandates',
  includeBasic: [ ],
  methods: {
    create: httpMethod({
      method: 'POST',
      path: 'directdebit/web/',
      params: {
          'BankAccountId': { required: true }
        , 'Culture': { required: true, default: 'EN' }
        , 'ReturnURL': { required: true }
      }
    }),
    view: httpMethod({
      method: 'GET',
      path: '{MandateId}'
    })
  }
})
