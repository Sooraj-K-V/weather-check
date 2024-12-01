import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [displayWeather, setDisplayWeather] = useState("weather details");

  const handleInputChangeLat = (e) => {
    setLat(e.target.value);
  };

  const handleInputChangeLon = (e) => {
    setLon(e.target.value);
  };

  const getWeather = async () => {
    try {
      if (lat == "" && lon == "") return;
      setLat();
      const response =
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=abdccd8cab9ec7f17ea67095ca4c1809
`);
      const data = response.data;
      console.log(data.weather);
      setDisplayWeather(
        response.data.name +
          " : " +
          response.data.weather[0].description +
          ", " +
          response.data.weather[0].main
      );
      setLat("")
      setLon("")
      
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="m-4 text-center">Weather app</h1>
        <div className="d-flex ">
          <input
            type="text"
            placeholder="Latitude"
            className="form-control m-2"
            onChange={handleInputChangeLat}
          />
        </div>
        <div className="d-flex ">
          <input
            type="text"
            placeholder="Longitude"
            className="form-control m-2"
            onChange={handleInputChangeLon}
          />
        </div>
        <div className="text-center">
          <button
            className=" btn bg-info text-white my-2"
            onClick={getWeather}
          >
            get
          </button>
        </div>
        <div className="form-control my-3 p-3 text-center">{displayWeather}</div>
      </div>
    </>
  );
}

export default App;
