//select HTML elements 
const exchangeRateElement = document.querySelector(".exchange-rate")


//const and vars
const deefaultCurrency = "USD";
let exchangeRateNum = 0;

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

//GET THE USER CURRENCY
async function getUserCurrency() {
  const res = await fetch(ipdata.currency());
  const userCurrency = await res.json();
  return userCurrency;
  console.log(userCurrency);
}

//get currencies
async function getCurrencies() {
  const res = await fetch(exchangeRate.list());
  const data = await res.json();
  return data.supported_codes;
}

//get the exchange rate
async function getExchangeRte(fromCurrenvyCode, toCurrenvyCode) {
  const amount = 1;
  const res = await fetch(
    exchangeRate.convert(fromCurrenvyCode, toCurrenvyCode, amount)
  );
  const data = await res.json();
  return data.conversion_rate;
}

async function renderExchangeRate(fromCurrenvyCode, toCurrenvyCode) {
  exchangeRateNum = await getExchangeRte(fromCurrenvyCode, toCurrenvyCode);
  exchangeRateElement.innerHTML = `<p>1 ${fromCurrenvyCode} equals</p>
                                  <h1>${exchangeRateNum} ${toCurrenvyCode}</h1>`
}

//init app
async function init() {
  const userCurrency = await getUserCurrency();
  //render exchange rate
  renderExchangeRate(deefaultCurrency, userCurrency.code);

  //rednder select options

  //convert
}
init();
