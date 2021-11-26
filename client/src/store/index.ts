import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore, Middleware, StoreEnhancerStoreCreator } from 'redux';
import reducers from './reducers';
import { History } from 'history';
import { ApplicationState } from './states';
import thunk from 'redux-thunk';

export default function configureStore(history: History, initialState?: ApplicationState) {
    const middleware: Middleware[] = [
        thunk
    ];

    const rootReducer = combineReducers({
        router: connectRouter(history),
        ...reducers
    });

    const enhancers: StoreEnhancerStoreCreator[] = [

    ];

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}