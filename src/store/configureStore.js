'use strict';

import { combineReducers, createStore } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation

export default () => {
	return createStore(
		combineReducers({
			expenses : expensesReducer,  // []
			filters  : filtersReducer    // {}
		})
	);
};
