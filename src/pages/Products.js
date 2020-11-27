import React from 'react'
import './Products.css'
import {productList} from '../productList'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

function Products() {
    return (
        <div className='products'>
            <div className="center products__display">
                <div className="products__row">
                {productList.map(({name,image}) => (
                <Card className='products__card'>
                    <CardMedia
                    component = 'img'
                    height = '150'
                    image={image}
                    title="product"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    </CardContent>

                </Card>
            ))}
                </div>
                <div className="products__row">
                {productList.map(({name,image}) => (
                <Card className='products__card'>
                    <CardMedia
                    component = 'img'
                    height = '150'
                    image={image}
                    title="product"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    </CardContent>

                </Card>
            ))}
                </div>
                <div className="products__row">
                {productList.map(({name,image}) => (
                <Card className='products__card'>
                    <CardMedia
                    component = 'img'
                    height = '150'
                    image={image}
                    title="product"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    </CardContent>

                </Card>
            ))}
                </div>
           
            </div>
        </div>
    )
}

export default Products
