import { Link } from 'react-router-dom';

const Item = ({ id, title, img, price, category }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-muted small">{category}</p>
                    <h4 className="card-text">${price}</h4>
                    <Link to={`/item/${id}`} className="btn btn-primary mt-auto">Ver detalles</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
