import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
    
    const [data, setData] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');
    const [category, setCategory] = useState('all');
    const [priceRange, setPriceRange] = useState(1000);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const filterData = useMemo(() => {
        return data.filter((item) =>
            item.title.toLowerCase().includes(searchProduct.toLowerCase()) &&
            item.price <= priceRange &&
            (category === "all" || item.category === category)
        );
    }, [data, searchProduct, category, priceRange]);

    return (
        <div className="products-container">
            
            <h1 className="products-header">Product List</h1>
            <div className="main-content">
                <div className="filter-deck">
                    <div className="filter-section">
                        <h2>Search</h2>
                        <input
                            type="text"
                            placeholder="Search what you want"
                            className="search-input"
                            value={searchProduct}
                            onChange={(e) => setSearchProduct(e.target.value)}
                        />
                    </div>
                    <div className="filter-section">
                        <h2>Category</h2>
                        <select
                            className="category-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                            <option value="jewelery">Jewelry</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                    <div className="filter-section">
                        <div className="price-range-container">
                            <label className="price-range-label">Price Range: ${priceRange}</label>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                className="price-range-input"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                            />
                        </div>
                    </div>
                </div>
                <div className="products-grid">
                    {filterData.map((product) => (
                        <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
                            <img
                                className="product-image"
                                src={product.image}
                                alt={product.title}
                            />
                            <div className="product-info">
                                
                                <p className="product-title">{product.title}</p>
                                <p className="product-category">{product.category}</p>
                                <p className="product-price"><strong>Price: $</strong>{product.price}</p>
                                <button className="buy-button">Buy Now</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;