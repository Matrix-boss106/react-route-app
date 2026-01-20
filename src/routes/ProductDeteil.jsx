import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDeteil.css';

export default function ProductDeteil() {
    const [data, setData] = useState([]);  
    const { id } = useParams();
    const { title, description, image, category, price  } = data

    useEffect(() => {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching products:', error));
        }, []);

    

    return (
        <div className="product-detail-container">
            <h1 className="products-header">Product Details</h1>
            <div className="details-panel">
                <Link to={'/product'} className="back-button">←</Link>
                <div className="details-wrapper">
                    <div className="image-section">
                        <img
                            className="product-image"
                            src={image}
                            alt={title}
                        />
                    </div>
                    <div className="details-section">
                        <h1 className="product-title">{title}</h1>
                        <p className="product-category">Category: {category}</p>
                        <p className="product-description">{description}</p>
                        <div className="product-rating">
                            <span>★</span>
                            <span>{data.rating?.rate || 'N/A'} ({data.rating?.count || 0} reviews)</span>
                        </div>
                        <p className="product-price">Price: ${price}</p>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
