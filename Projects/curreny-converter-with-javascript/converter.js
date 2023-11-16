// API PROVIDERS
const ipdata = {
  baseurl: "https://api.ipdata.co",
  key: "13952c49cd907f6b9a168b62b0b2364ba3eb022e303cd6aec6afb8cd",

  currency: function () {
    return `${this.baseurl}/currency?api-key=${ipdata.key}`;
  },
};
const exchangeRate = {
  baseurl: "https://v6.exchangerate-api.com/v6",
  key: "fe88a3d526b3b880c429025d",

  convert: function (fromCurrenvyCode, toCurrenvyCode, amount) {
    // THIS API IS NOT FREE ANYMORE
    // return `${this.baseurl}/convert?from=${fromCurrenvyCode}&to=${toCurrenvyCode}&amount=${amount}&access_key=${this.key}`;
    return `${this.baseurl}/${this.key}/pair/${fromCurrenvyCode}/${toCurrenvyCode}/${amount}`;
  },

  list: function () {
    return `${this.baseurl}/${this.key}/codes`;
  },
};
