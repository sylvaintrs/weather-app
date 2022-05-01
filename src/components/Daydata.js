import React from 'react'

function Daydata(data) {

  const milliseconds = Date.parse(data.data.datetime) 
  const date = new Date(milliseconds)

  const actualDate = new Date()

  return (
    <div className="day-data">
        <p>{actualDate.getHours() === date.getHours() ? "Now" : `${date.getHours()}h`}</p>
        {data.weatherTypes[data.data.weather][1]}
        <p>{`${data.data.temp2m}°`}</p>
    </div>
  )
}

export default Daydata