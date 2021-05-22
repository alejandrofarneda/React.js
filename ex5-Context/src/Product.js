import './Cards.css';
import { useCart, useSetCart } from './CartContent';

function Product({ data }) {
    const SetCart = useSetCart();
    const cart = useCart();

    function AddToCart(e) {
        if (cart.some(e => e.id === data.id)) {
            SetCart(
                cart.map((e) =>
                    e.id === data.id
                        ? { ...e, cantidad: e.cantidad + 1 }
                        : e
                )
            );
        } else {
            SetCart([...cart, { ...data, cantidad: 1 }]);
        }
    }

    return (
        <div onClick={(e) => AddToCart(e)} className="cards">
            <div>
                <div
                    className="photo"
                    style={{ backgroundImage: `url(${data.image})` }}
                />
                <div className="info">
                    <p>Nombre: {data.nombre}</p>
                    <p>Precio: {data.precio}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
