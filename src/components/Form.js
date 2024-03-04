import React from 'react'

const Form = (props) => {
    return(
        <div className="WeatherPage">
            <form onSubmit={props.weatherMethod}>
                <input type='text' name='city' placeholder='Город' required/>
                <button>Получить погоду</button>
            </form>
        </div>
    );
}

export default Form;