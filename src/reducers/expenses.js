'use strict';

// Expenses reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,      // existing expenses
				action.expense // new expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				return (expense.id === action.id) ? {...expense, ...action.updates} : expense;
			});
		default:
			return state;
	}
};
