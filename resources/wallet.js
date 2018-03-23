var httpClient = require("../lib/httpClient"),
  httpMethod = require("../lib/httpMethod");

module.exports = httpClient.extend({
  path: "wallets",

  includeBasic: ["fetch", "update"],

  methods: {
    create: httpMethod({
      method: "POST",
      path: "",
      params: {
        Owners: { required: true },
        Description: { required: true, default: "wallet" },
        Currency: { required: true, default: "EUR" }
      }
    }),

    transfer: httpMethod({
      method: "POST",
      path: "../transfers",
      params: {
        AuthorId: { required: true },
        DebitedFunds: { required: true },
        Fees: { required: true, default: { Currency: "EUR", Amount: 0 } },
        DebitedWalletID: { required: true },
        CreditedWalletID: { required: true }
      }
    }),

    fetchTransfer: httpMethod({
      method: "GET",
      path: "../transfers/{Id}",
      params: {
        Id: { required: true }
      }
    }),

    transactions: httpMethod({
      method: "GET",
      path: "{Id}/transactions?per_page={per_page}&page={page}",
      params: {
        Id: { required: true },
        per_page: { required: false, default: "10" },
        page: { required: false, default: "0" }
      }
    }),

    createRefund: httpMethod({
      method: "POST",
      path: "../transfers/{Id}/refunds",
      params: {
        Id: { required: true },
        AuthorId: { required: true }
      }
    }),

    fetchRefund: httpMethod({
      method: "GET",
      path: "../refunds/{Id}",
      params: {
        Id: { required: true }
      }
    })
  }
});
