import React from 'react'
import Link from 'next/link'

const ProductList = ({products}) => {
    return (
        <div className='relative bg-white'>
            <div>
                {
                    products.map((product) => (
                        <div key={product._id}>
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <Link href={{ pathname: "/products/", query: { _id: product?._id } }}>
                                View Product</Link>
                            <hr />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ProductList