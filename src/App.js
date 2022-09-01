import React from "react"
import Card from "./Card.js"
import data from "./data.js"

export default function App() {
    const dataElements=data.map((item)=>{
        return (
            <Card 
                key={item.title}
                item={item}
            />
        )  
    })
    return (
        <>
            
            {dataElements}
        </>
    )
}