// api.openweathermap.org/data/2.5/weather?q=Pyuthan&appid=a45e149b609d96cc715792b7a61d72c6
import React, { useState, useEffect } from 'react'
import './style.css'
import Weathercard from './weathercard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("Pyuthan");
    const [tempInfo, settempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a45e149b609d96cc715792b7a61d72c6`

            const response = await fetch(url);
            let data = await response.json();

            console.log(data);

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0]

            const { name } = data;
            const { speed } = data.wind;

            const { country, sunset } = data.sys;
            const { timezone } = data.timezone

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                speed,
                country,
                sunset,

            }

            settempInfo(myNewWeatherInfo)
            console.log(temp);
            // console.log((data));
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getWeatherInfo()
    }, [])
    return (
        <>
            <div className="wrap">
                <div className="search ">
                    <input type="search"
                        placeholder="Search.."
                        autoFocus
                        id="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="searchTerm" />

                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <Weathercard {...tempInfo} />
        </>
    )
}

export default Temp
