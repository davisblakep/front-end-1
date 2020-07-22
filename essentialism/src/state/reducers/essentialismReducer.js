const initialState = {
    item: '',
    isFetching: false,
    error: '',
}


export const essentialismReducer = (state = initialState, action) => {
    switch(action.type){
        // case "FETCH_VALUES_START":
        //     return{
        //         ...state,
        //         isFetching: true,
        //     }
        // case "FETCH_VALUES_SUCCESS":
        //     return{
        //         ...state,
        //         item: action.payload,
        //         isFetching: false,
        //         error: '',
        //     }
        // case "POST_VALUES":
        // return{
        //     ...state,
        //     item: action.payload,
        //     isFetching: false,
        //     error: '',
        // }
        default: 
            return state;
    }
}