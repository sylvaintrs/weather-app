import './main.css';

import Axios from 'axios'

import Daydata from './components/Daydata'
import { useEffect, useRef, useState } from 'react';

import Day from './css/img/day.jpg'
import Sunrise from './css/img/sunrise.jpg'
import Night from './css/img/night.jpg'

function App() {

  const [dataWeather, setDataWeather] = useState()
  const [isDataReceived, setIsDataReceived] = useState(false)

  const background = useRef("")


  useEffect(() => {
    Axios.get("https://api.meteo-concept.com/api/forecast/nextHours?token=c92ae836a51390b47ff4ce1bfa083dea2d7c7d2b39985b82fc14f579084a4a99&insee=41239&hourly=true")
    .then(res => {
      setDataWeather(res.data)
      setIsDataReceived(true)

      console.log()

      // Search for the period of the day (for the background)
      const milliseconds = Date.parse(res.data.forecast[0].datetime) 
      const date = new Date(milliseconds)
      const hour = date.getHours() 

      if (hour===10 || hour===11 || hour===12 || hour===13 || hour===14 || hour===15 || hour===16 || hour===17 || hour===18) {
        background.current = Day
      } else
      if (hour===7 || hour===8 || hour===9 || hour===19 || hour===20) {
        background.current = Sunrise
      } else
      if (hour===1 || hour===2 || hour===3 || hour===4 || hour===5 || hour===6 || hour===21 || hour===22 || hour===23 || hour===0) {
        background.current = Night
      }
    })
  }, [])


  const weatherTypes = {
    0: "Soleil",
    1: "Peu nuageux",
    2: "Ciel voilé",
    3: "Nuageux",
    4: "Très nuageux",
    5: "Couvert",
    6: "Brouillard",
    7: "Brouillard givrant",
    10: "Pluie faible",
    11: "Pluie modérée",
    12: "Pluie forte",
    13: "Pluie faible verglaçante",
    14: "Pluie modérée verglaçante",
    15: "Pluie forte verglaçante",
    16: "Bruine",
    20: "Neige faible",
    21: "Neige modérée",
    22: "Neige forte",
    30: "Pluie et neige mêlées faibles",
    31: "Pluie et neige mêlées modérées",
    33: "Pluie et neige mêlées fortes",
    40: "Averses de pluie locales et faibles",
    41: "Averses de pluie locales",
    42: "Averses locales et fortes",
    43: "Averses de pluie faibles",
    44: "Averses de pluie",
    45: "Averses de pluie fortes",
    46: "Averses de pluie faibles et fréquentes",
    47: "Averses de pluie fréquentes",
    48: "Averses de pluie fortes et fréquentes",
    60: "Averses de neige localisées et faibles",
    61: "Averses de neige localisées",
    62: "Averses de neige localisées et fortes",
    63: "Averses de neige faibles",
    64: "Averses de neige",
    65: "Averses de neige fortes",
    66: "Averses de neige faibles et fréquentes",
    67: "Averses de neige fréquentes",
    68: "Averses de neige fortes et fréquentes",
    70: "Averses de pluie et neige mêlées localisées et faibles",
    71: "Averses de pluie et neige mêlées localisées",
    72: "Averses de pluie et neige mêlées localisées et fortes",
    73: "Averses de pluie et neige mêlées faibles",
    74: "Averses de pluie et neige mêlées",
    75: "Averses de pluie et neige mêlées fortes",
    76: "Averses de pluie et neige mêlées faibles et nombreuses",
    77: "Averses de pluie et neige mêlées fréquentes",
    78: "Averses de pluie et neige mêlées fortes et fréquentes",
    100: "Orages faibles et locaux",
    101: "Orages locaux",
    102: "Orages fort et locaux",
    103: "Orages faibles",
    104: "Orages",
    105: "Orages forts",
    106: "Orages faibles et fréquents",
    107: "Orages fréquents",
    108: "Orages forts et fréquents",
    120: "Orages faibles et locaux de neige ou grésil",
    121: "Orages locaux de neige ou grésil",
    122: "Orages locaux de neige ou grésil",
    123: "Orages faibles de neige ou grésil",
    124: "Orages de neige ou grésil",
    125: "Orages de neige ou grésil",
    126: "Orages faibles et fréquents de neige ou grésil",
    127: "Orages fréquents de neige ou grésil",
    128: "Orages fréquents de neige ou grésil",
    130: "Orages faibles et locaux de pluie et neige mêlées ou grésil",
    131: "Orages locaux de pluie et neige mêlées ou grésil",
    132: "Orages fort et locaux de pluie et neige mêlées ou grésil",
    133: "Orages faibles de pluie et neige mêlées ou grésil",
    134: "Orages de pluie et neige mêlées ou grésil",
    135: "Orages forts de pluie et neige mêlées ou grésil",
    136: "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
    137: "Orages fréquents de pluie et neige mêlées ou grésil",
    138: "Orages forts et fréquents de pluie et neige mêlées ou grésil",
    140: "Pluies orageuses",
    141: "Pluie et neige mêlées à caractère orageux",
    142: "Neige à caractère orageux",
    210: "Pluie faible intermittente",
    211: "Pluie modérée intermittente",
    212: "Pluie forte intermittente",
    220: "Neige faible intermittente",
    221: "Neige modérée intermittente",
    222: "Neige forte intermittente",
    230: "Pluie et neige mêlées",
    231: "Pluie et neige mêlées",
    232: "Pluie et neige mêlées",
    235: "Averses de grêle",
  }

  const day = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
  ]

  const actualDate = new Date()


  return (
    <div className="App">
      <div className="card" style={{ backgroundImage: `url(${background.current})` }}>

        <div className="title">
          <p>{isDataReceived ? dataWeather.city.name : ""}</p>
          <h2>{isDataReceived ? `${dataWeather.forecast[0].temp2m}°` : ""}</h2>
          <p>{isDataReceived ? weatherTypes[dataWeather.forecast[0].weather] : ""}</p>
        </div>

        <div className="data">
          <h2>{day[actualDate.getDay() - 1]}</h2>

          <div className="every-hours">
            {isDataReceived ? <Daydata data={dataWeather.forecast[0]} /> : ""}
            {isDataReceived ? <Daydata data={dataWeather.forecast[1]} /> : ""}
            {isDataReceived ? <Daydata data={dataWeather.forecast[2]} /> : ""}
            {isDataReceived ? <Daydata data={dataWeather.forecast[3]} /> : ""}
            {isDataReceived ? <Daydata data={dataWeather.forecast[4]} /> : ""}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
