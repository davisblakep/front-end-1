

const initialState = {
    
    user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    },
    Items: [
        {
          id: 1,
          timestampDue: 1561881986756,
          name: "Pay bill",
          complete: false
        }
      ],
    values: [
        {
          value: "Weight Loss",
          description: "Improve your health with weight loss.",
          img:
            "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          id: 1,
          isSelected: false,
        },
        {
          value: "Organization",
          description: "An organized room is an organized mind.",
          img:
            "https://images.pexels.com/photos/670723/pexels-photo-670723.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 2,
          isSelected: false,
        },
        {
          value: "Reading",
          description: "For those who love to read or want to read more.",
          img:
            "https://images.pexels.com/photos/34075/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 3,
          isSelected: false,
        },
        {
          value: "Writing",
          description: "Write down your thoughts.",
          img:
            "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 4,
          isSelected: false,
        },
        {
          value: "Less Social Media",
          description: "Unplug from the Matrix.",
          img:
            "https://images.pexels.com/photos/17663/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 5,
          isSelected: false,
        },
        {
          value: "Nutrition",
          description: "Increase mind and body performance.",
          img:
            "https://images.pexels.com/photos/8110/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 6,
          isSelected: false,
        },
      ],
    isFetching: false,
    error: '',
    displayName: 'TEST',
    displayNav: '/login',
}


export function essentialismReducer(state = initialState, action){
    switch(action.type){
       
        // case "FETCH_USER_START":
        //     return{
        //         ...state,
        //         isFetching: true,
        //     }
        // case "FETCH_USER_SUCCESS":
        //     return{
        //         ...state,
        //         user: action.payload.user,
        //         Items: action.payload.Items,
        //         values: action.payload.values,
        //         isFetching: false,
        //         error: '',
        //     }
        // case "POST_NEW_USER":
        // return{
        //     ...state,
        //     user: action.payload.user,
        //     isFetching: false,
        //     error: '',
        // }
        case "TOGGLE_VALUE":
        return{
            ...state,
            values: state.values.map(item => {
                if (action.payload === item.id) {
                  return {
                    ...item,
                    isSelected: !item.isSelected,
                  };
                }
                return item;
            })
              }
              case "CHANGE_NAV_NAME":
        return{
            ...state,
            displayName: action.payload,
            displayNav: "/dashboard"
              }
              case "LOGOUT_NAV_NAME":
                return{
                    ...state,
                    displayName: "LOGIN",
                    displayNav: "/login"
                      }
        
        default: 
            return state;
    }
}
