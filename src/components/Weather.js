import React from 'react'

const Weather = (props) => {
    return(
        <div className="infoWeath">
                <p className="error">{props.error}</p>

                {props.city &&
                    <div>
                        <p> Местоположение: {props.country} {props.city} </p>
                        <p> Температура: {props.temp.toFixed(1)} °C </p>
                        <p> Ощущается как: {props.feels.toFixed(1)} °C </p>
                        <p> Скорость ветра: {props.wind} м/с </p>
                        <p> Давление: {props.pressure} мм рт.ст.</p>
                    </div>               
                }
            </div>
    );
}

export default Weather;