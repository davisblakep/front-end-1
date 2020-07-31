import {
  INITIAL_FETCH,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_SUCCESS,
  REMOVE_SUCCESS,
} from "../../state/actions";

  const initialState = {
    
  goals: [
    {
      title: "Get better at this stuff",
      date: "August 12 2020",
      id: 1,
    },
    {
      title: "Donate 1/2 of clothing in closet to clear space.",
      date: "August 25 2020",
      id: 2,
    },
  ],
  
  isSaving: false,
    updated: false,
    

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
  displayName: 'LOGIN',
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
    
      // case "TOGGLE_VALUE":
      // return{
      //     ...state,
      //     values: state.values.map(item => {
      //         if (action.payload === item.id) {
      //           return {
      //             ...item,
      //             isSelected: !item.isSelected,
      //           };
      //         }
      //         return item;
      //     })
      //       }
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
      
      case INITIAL_FETCH:
      return {
        ...state,
        isFetching: true,
        error: "",
        updated: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        goals: action.payload,
        updated: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        updated: false,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        updated: true,
      };
    case REMOVE_SUCCESS:
      return {
        ...state,
        updated: true,
      };

    case "TOGGLE_VALUE":
      return {
        ...state,
        values: state.values.map((item) => {
          if (action.payload === item.id) {
            return {
              ...item,
              isSelected: !item.isSelected,
            };
          }
          return item;
        }),
      };

      case "ADD_GOAL":
        return{
          ...state,
          goals: [
            ...state.goals,
            {
              title: action.payload.title,
              date: action.payload.date,
              id: Date.now()
            }
          ]
        };

        case "REMOVE_GOAL":
        return{
          ...state,
          goals: [...state.goals.filter(item => item.id !== action.payload)]
        };
                    
      default: 
          return state;

  }
}

// 