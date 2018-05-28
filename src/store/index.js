import {createStore, combineReducers} from "redux";

import {favCountReducer} from '../reducers/index';


export var configureStore = () =>{
    var reducers = combineReducers({
        favList: favCountReducer
    });

    let store = createStore(reducers);
    return store;
};