import * as types from "./actionTypes";

const initialState = {
  data:{
    shoes: [],
    isLoading: false,
    isError: false
  }
};

const reducer = (state=initialState,action)=>{
  const {type,payload}=action;
  switch(type){
      case types.GET_SHOES_REQUEST:
          return {...state,data:{...state.data,isLoading:true}};
      case types.GET_SHOES_SUCCESS:
          return {...state,
          data:{
            ...state.data,
            shoes:payload,
            isLoading:false,
            isError:false
          }}; 
      case  types.GET_SHOES_FAILURE:
          return {...state,
          data:{
            ...state.data,
            isLoading:false,
            isError:payload
          }};
      case  types.UPDATE_SHOE_COUNT_REQUEST:
          return state; 
      case  types.UPDATE_SHOE_COUNT_SUCCESS:
          return state;      
      case  types.UPDATE_SHOE_COUNT_FAILURE:
          return state;
      default:
          return state;    

  }
}
export default reducer;
