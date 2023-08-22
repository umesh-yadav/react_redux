const state = {account : {amount : 1}, bonus: {points : 2}};
const newState = {account : {...state.account}, bonus: {points : 3}};

state.account.amount = 10;
console.log(state, newState);

