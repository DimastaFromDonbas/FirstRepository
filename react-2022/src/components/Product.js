import React from "react";
import {Card, Button,Col} from "react-bootstrap"

function Product({product, selectProduct}){

  return <Col xs={12} sm={6} md={4} lg={3}><Card>
  <Card.Img variant="top" src={product.imgSrc} />
  <Card.Body>
    <Card.Title>{product.brand} {product.model}</Card.Title>
    <Card.Text>
       Price: {product.price} $
    </Card.Text>
    {product.selected ?
    <Button variant="danger" onClick={() => selectProduct(product.id, false)}>Remove to Card</Button>:
    <Button variant="success" onClick={() => selectProduct(product.id, true)}>Add to Card</Button>  }
  </Card.Body>
</Card></Col>
}

export default Product;

