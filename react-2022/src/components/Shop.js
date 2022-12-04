import React from "react";
import {Container,Row} from 'react-bootstrap'
import Product from "./Product";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../rdx/items/selectors";
import { setProducts } from "../rdx/items/actions";

function Shop() {
    const products = useSelector(selectAllProducts)
    const dispatch = useDispatch()

    function selectProduct(id ,value) {
        // setProducts( products.filter(product => product.id !== id))
       dispatch(setProducts(products.map((product) => {
            if(product.id === id) {
                return {...product, selected: value}
            }
                return {...product}
        })))
    }

    return<> 

    <Cart selectProduct={selectProduct} products={products.filter(el => el.selected)} />

    <Container>
        <Row>
         {products.map(product => <Product selectProduct={selectProduct} key={product.id}  product={product} />)}
        </Row>
    </Container>
     </>
}

export default Shop

