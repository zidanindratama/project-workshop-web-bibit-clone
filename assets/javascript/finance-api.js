const API_KEY = "66183c9beb3b5d9ddb931d81a0972db7";
const URL_EOD = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=AAPL`;
const URL_CURRENCY = `http://api.marketstack.com/v1/tickers?access_key=${API_KEY}`;

fetch(URL_EOD)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
