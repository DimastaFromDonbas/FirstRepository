import React, { useEffect, useState } from "react";
import {ListGroup, Badge} from "react-bootstrap"

function Cart({products, selectProduct}) {

    const [ total, setTotal] = useState("0")

    useEffect(() => {
        setTotal (products.reduce((acc, el) => acc + el.price, 0))
    },[products])

    return <>
    {products.length ?  <ListGroup className="mb-3" as="ul">
    <ListGroup.Item as="li" active>
      Cart
    </ListGroup.Item>
    <ListGroup as="li"> 
      {products.map(product => 
      <ListGroup.Item key={products.id} >{product.brand} {product.model} {product.price} $ <Badge style={{cursor:"pointer"}} className="ml-3" bg="danger" onClick={() => selectProduct(product.id, false)}>remove</Badge> </ListGroup.Item>)}
      <h2>Total:</h2>
      <p className="text-center"><b>{total}</b></p>
    </ListGroup>
  </ListGroup> : ''}
    </>
}

export default Cart