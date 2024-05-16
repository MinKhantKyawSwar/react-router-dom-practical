import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
    {
        id : 1,
        title : "apple",
        description : 
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, est voluptatum voluptas, voluptatem assumenda hic maxime, error quas dolorum deserunt eos inventore. Ratione, fuga quibusdam sapiente provident exercitationem magni amet."
    },
    {
        id : 2,
        title : "grapes",
        description : 
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, est voluptatum voluptas, voluptatem assumenda hic maxime, error quas dolorum deserunt eos inventore. Ratione, fuga quibusdam sapiente provident exercitationem magni amet."
    },
    {
        id : 3,
        title : "strawberry",
        description : 
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, est voluptatum voluptas, voluptatem assumenda hic maxime, error quas dolorum deserunt eos inventore. Ratione, fuga quibusdam sapiente provident exercitationem magni amet."
    },
    {
        id : 4,
        title : "orange",
        description : 
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, est voluptatum voluptas, voluptatem assumenda hic maxime, error quas dolorum deserunt eos inventore. Ratione, fuga quibusdam sapiente provident exercitationem magni amet."
    }
]

const ProductsPage = () => {
  return (
    <>
        {/* <h1>This is Products Page</h1> */}
        {
            PRODUCTS.map((product) =>(
                <Link to = {`/ProductsPage/${product.title}`}>
                    <div key={product.id} className='card'>
                        <h2>{product.title}</h2> <br />
                        <p>{product.description}</p> <br />
                        <hr />
                    </div>
                </Link>
            ))
        }

    </>
  )
}

export default ProductsPage