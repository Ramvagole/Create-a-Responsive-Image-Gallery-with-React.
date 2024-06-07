import { createContext, useEffect, useState } from "react"

 

 export let data=createContext()
 export function Context({children}){
    let [a,setVal]=useState([])
    function fetchData(){
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((res)=>{
            console.log(res)
            setVal(res)})
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <data.Provider value={{a}}>
            {children}
        </data.Provider>
    )
 }