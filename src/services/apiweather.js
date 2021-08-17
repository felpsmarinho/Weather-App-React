import axios from'axios';


export const apiweather = axios.create({
    baseURL: "https://goweather.herokuapp.com/weather/"
})