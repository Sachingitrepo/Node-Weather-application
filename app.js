//const request = require("request");
const geoCode = require("./util/geocode");
const forecast = require("./util/forecast");

const address = process.argv[2];
if (!address) {
  console.log("Specify the address please!");
} else {
  geoCode(address, (error, { latitude, longitutde, place }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitutde, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(error);
      console.log(forecastData);
    });
  });
}
