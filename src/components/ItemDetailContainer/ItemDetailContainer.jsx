import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/mockData';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });

        // 2. CLEANUP FUNCTION
        // Esto se ejecuta justo antes de desmontar el componente 
        return () => {
            setProduct(null);
        }

    }, [itemId]);

    if (!product) {
        return <div className="container mt-5 text-center"><h2>Cargando...</h2></div>;
    }

    return (
        <ItemDetail {...product} />
    );
};

export default ItemDetailContainer;
