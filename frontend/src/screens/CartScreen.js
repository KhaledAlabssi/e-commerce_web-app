import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

export default function CartScreen() {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const productId = params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
        
    }, [dispatch, productId, qty])

    return (
        <div>
            Cart
            
        </div>
    )
}
