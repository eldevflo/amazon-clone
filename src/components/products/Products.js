import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './Products.css'

const Products =()=> {
     const [suggessions, setSuggestion] = useState(
         [
         {id:1,title: 'Fire HD 10 Kids' , description:'see more' , image:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg'},
         {id:2,title: 'Home improvement' , description:'Explore Essential tools and more' , image:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'},
         {id:3,title: 'Décor inspired by the natural world' , description:'Explore more' , image:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'},
         ])
   

    
    return (
        <div className="suggession-container">
            {suggessions.map(suggession =>(
                suggessions.length===0 ? (<h1>thre is no suggestion for you</h1>)
                 :(
                     
                        

                        <Card className="card-container" xs={12} key={suggession.id}>
                                    <Card.Img variant="top" src={suggession.image} />
                                    <Card.Body>
                                        <Card.Title>{suggession.title}</Card.Title>
                                        <a href='./'>see more</a>
                                    </Card.Body>
                        </Card>

                                    
                        
                     )
            ))}
            
        </div>
    )
}

export default Products
