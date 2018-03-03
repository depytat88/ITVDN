import {combineReducers} from "redux";
import CarReducers from "./car";

const allReducers = combineReducers ({
    cars: CarsReducers
});

export default allReducers;
