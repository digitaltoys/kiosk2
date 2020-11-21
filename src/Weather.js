// 4c1f05438a742fac682c8cc9b31f9b6e
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=seoul&appid=4c1f05438a742fac682c8cc9b31f9b6e

import React, { useEffect } from "react";
import axios from "axios";

const API_KEY = "60f2f5a42cdb41d0871131637202111";

// function getCurrentWeather(cityName) {
//   // const endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1`;
//   const endpoint =
//     "http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108";
//   console.log(endpoint);

//   const result = fetch(endpoint)
//     .then((response) => response.text())
//     .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
//     .then((data) => console.log(data));
//   return result;
// }

// function getFiveDayForecast(cityName) {
//   const endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=5`;
//   const result = fetch(endpoint)
//     .then((response) => response.json())
//     .then((data) => data);
//   return result;
// }

export default function Weather() {
  useEffect(() => {
    // let a = getCurrentWeather("seoul")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((data) => {
    //     console.log(data);
    //   });

    const fetchUsers = async () => {
      try {
        let seoul = await axios.get(
          "/data/2.5/weather?q=seoul&appid=4c1f05438a742fac682c8cc9b31f9b6e",
          // `http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108`,
          {}
        );
        console.log(seoul);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  return <div>seoul</div>;
}
