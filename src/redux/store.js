import {
    combineReducers,
    compose,
    legacy_createStore
} from "redux";

import serviceListReducer from './serviceListReducer'
import serviceAddReducer from './serviceAddReducer'
import serviceListSearch from './serviceListSearch'

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
        combineReducers({
            serviceList: serviceListReducer,
            serviceAdd: serviceAddReducer,
            searchInput: serviceListSearch,
        }),
        undefined,
        compose(
            ReactReduxDevTools
        )
    );
}

export default configureStore;