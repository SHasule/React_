let reduxstate = {
    count: 0,
    name: "suraj",
    value: 1
};
function reducer(state, action) {
    // state.count=state.count+1
    console.log(action);
    if (action.type == "post/increment") return {
        ...state,
        count: state.count + 1
    };
    else {
        action.type = "post/decrement";
        return {
            ...state,
            count: state.count - 1
        };
    }
    return state;
}
reduxstate = reducer(reduxstate, {
    type: "post/increment"
});
console.log(reduxstate);
reduxstate = reducer(reduxstate, {
    type: "post/increment"
});
console.log(reduxstate);
reduxstate = reducer(reduxstate, {
    type: "post/increment/By",
    payloadby: 10
});
console.log("payload ", reduxstate);
reduxstate = reducer(reduxstate, {
    type: "post/increment/By",
    payloadby: 10
});
console.log("payload ", reduxstate);
reduxstate = reducer(reduxstate, {
    type: "post/decrement"
});
console.log(reduxstate);

//# sourceMappingURL=index.48c84614.js.map
