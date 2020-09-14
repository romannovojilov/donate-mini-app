import { combineReducers } from 'redux';
import { donateReducer } from './donateReducer';
import { autorsReducer } from './autorsReducer';
import { currencyAccountsReducer } from './currencyAccountsReducer';

export const rootReducer = combineReducers({
    donate: donateReducer,
    autors: autorsReducer,
    currencyAccounts: currencyAccountsReducer
});