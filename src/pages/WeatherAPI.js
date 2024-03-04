import React from 'react'
import '../Weather.css'

import Info from "../components/Info"
import Weather from "../components/Weather"
import Form from "../components/Form"


const API_KEY = "946012ea8afdd5233c009ccb25cd839c" // - ТВой уникальный ключ

export default class WeatherAPI extends React.Component{


  state = { // Создаём объект состояний, которые изначально равны ничему
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    pressure: undefined,
    feels: undefined,
    error: undefined
  }

  // Благодаря следующему куску кода Мы можем получать и выводить данные асинхронно (так, чтобы они не пропадали в ту же секунду, кгда их получили)
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value // благодаря этому методу отслеживания событий , Мы получаем значение, которое вводим ( город)
    const api_url = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);//получаем информацию по этой ссылке, которая ведёт к API,у нас есть свой ИНДИВИДУАЛЬНЫЙ ключ, по которому мы и обращаемся к API
    const data = await api_url.json(); // Мы получаем информацию в виде HTML кода  и благодаря функции json() Мы её конвертируем в json


    // Благодаря следующему куску кода - Мы заполняем Наши состояния определённми значениями
    if(data.name != null){
     this.setState({
       temp: data.main.temp - 273.15,
       city: data.name,
       pressure: Math.floor(data.main.pressure * 0.75006),
       feels: data.main.feels_like - 273.15,
       country: data.sys.country,
       wind: data.wind.speed,
       error: undefined
      });
    }
    
    // Если Мы не получили значения, то заполняется только error, благодаря которому Мы можем обработать ошибку и Наша программа не вылетит
    else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        pressure: undefined,
        feels: undefined,
        error: "Проверьте введённые Вами данные"
      });
    }
    
  }

  // Благодаря следующему куску кода Мы присваиваем  каждому тегу div свой Класс, благодаря которому, мы можем задать определённые стили.
  render() {
    return (
      <div >      
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info/>
              </div>
              <div className="col-sm-7 form">
              <Form weatherMethod={this.gettingWeather} /*Мы обращаемся к компоненту Form в котором отслеживаем нажатие кнопки *//>
              <Weather {...this.state} /*Мы передаём все свойства в коммпонент Weather*//> 
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

