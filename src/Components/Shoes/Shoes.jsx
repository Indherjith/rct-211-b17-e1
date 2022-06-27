import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from "uuid";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
  updateShoeCountFailure,
  updateShoeCountSuccess,
} from "../../Redux/action";

const Shoes = () => {
  const {shoes,isLoading,isError} = useSelector(store=>store.data);
  const store = useSelector((store)=>store);
  const dispatch = useDispatch();

  const getshoes=()=>{
    const requestAction=getShoesRequest();
    dispatch(requestAction);

    return axios.get("http://localhost:8080/shoes")
    .then(res=>{
      const successAction = getShoesSuccess(res.data);
      console.log(successAction);
      dispatch(successAction);
    })
    .catch((err)=>{
      const errorAction=getShoesFailure(err);
      dispatch(errorAction);
    })
  }

  useEffect(()=>{
    getshoes();
  },[])


  console.log(shoes);
  return <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
    {shoes.length && 
      shoes.map((item)=>{
        return<div key={item.id} style={{textAlign:"center",marginBottom:"40px",border:"2px solid black" , padding:"10px"}}>
            <h1>{item.name}</h1>
            <div>
              <img src={item.image} style={{width:"250px",height:"200px"}}  alt="" />
            </div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <button>+</button>
                {item.cart_quantity}
                <button>-</button>
            </div>
            
          </div>;              
       })
    }
  </div>;
};

export default Shoes;
