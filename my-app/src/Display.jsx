import { useContext } from "react"
import { data } from "./Context"
export function Display(){
    let {a}=useContext(data)
    return(
        <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,250px)",gridTemplateRows:"repeat(3,250px)",gap:"25px" ,width:"80%",margin:"auto",marginTop:"35px"}}>
            {
                a.map((v,i)=>{
                    return(
                        <div key={i} style={{textAlign:"center",border:"1px solid black"}}>
                            <img style={{width:"100px"}} src={v.image}/>
                            <h3>Category:{v.category}</h3>
                            <h2>Price:{v.price}</h2>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}