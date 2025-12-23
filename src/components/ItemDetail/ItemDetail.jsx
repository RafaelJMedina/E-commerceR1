const ItemDetail = ({ title, img, category, description, price, stock }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt={title} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h2>{title}</h2>
                    <p className="text-muted text-uppercase">{category}</p>
                    <p>{description}</p>
                    <h3 className="my-4">${price}</h3>
                    <p>Stock disponible: {stock}</p>
                    <button className="btn btn-primary btn-lg">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
