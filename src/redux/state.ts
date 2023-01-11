import {combineReducers, legacy_createStore} from "redux";
import {currencyReducer, CurrencyState} from './currencyReducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const reducers = combineReducers({
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = legacy_createStore(reducers);
export const useAppSelector: TypedUseSelectorHook<IGlobalState> = useSelector