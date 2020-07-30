import Axios from 'axios';


// Actions for the API

export const fetchUserData = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_USER_START'});
        Axios
            .get('http://localhost:3333/')
            .then(res => {
                console.log("Axios Reponse", res)
                dispatch({ type: 'FETCH_USER_SUCCESS', payload: res.data})
            })
            .catch(err => {console.log('Axios error', err)})
    }
}


export const createUser = (newUser) => {
    return dispatch => {
        Axios
            .post('http://localhost:3333/',
            {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email, 
                id: Date.now(),
            }
            )
            .then(res => {
                console.log("Axios Reponse from createUser POST", res)
                dispatch({ type: 'POST_NEW_USER', payload: res.data})
            })
            .catch(err => {console.log('Axios error from POST', err)})
    }
}



// Actions without the API




export const toggleValue = id => {
  console.log("Value clicked from toggleValue action",id);
  return dispatch => {
    dispatch({type: "TOGGLE_VALUE", payload: id});
    
  };
};

export const updateNavName = username => {
    console.log("Value clicked from updateNavName action", username);
    return dispatch => {
      dispatch({type: "CHANGE_NAV_NAME", payload: username});
      
    };
  };

  export const logoutNavName = () => {
    return dispatch => {
      dispatch({type: "LOGOUT_NAV_NAME"});
      
    };
  };