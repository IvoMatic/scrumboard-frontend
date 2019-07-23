import * as weather from '../images/weatherIcons';
import store from '../../store/store';
const currentWeather = () => {
    const state = store.getState();
    if(state.user.weather) {
        switch(state.user.weather.weather[0].description) {
            case "few clouds":
                return weather.FEW_CLOUDS;
            
            case "clear sky":
                return weather.CLEAR_SKY;
            
            case "scattered clouds":
                return weather.SCATTERED_CLOUDS;

            case "broken clouds":
                return weather.BROKEN_CLOUDS;
            
            case "shower rain":
                return weather.SHOWER_RAIN;
            
            case "rain":
                return weather.RAIN;
            
            case "thunderstorm":
                return weather.THUNDERSTORM;

            case "snow":
                return weather.SNOW;
            
            case "mist":
                return weather.MIST;

            default:
                return weather.NO_WEATHER;
        }   
    }
    return weather.NO_WEATHER;
}

export default currentWeather;