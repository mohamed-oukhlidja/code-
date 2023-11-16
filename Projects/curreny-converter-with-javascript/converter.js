// API PROVIDERS
const ipdata = {
    key: "2d9f9061ae1738bb9a263719337f85ff8062692d30f04ee9d3a76231",
    baseUrl: "https://api.ipdata.co",
    currency: function (params) {
      return `${this.baseUrl}/currency?api-key=${this.key}`;
    },
  };
  