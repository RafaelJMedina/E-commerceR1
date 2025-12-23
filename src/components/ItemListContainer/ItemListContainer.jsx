import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../api/mockData';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
