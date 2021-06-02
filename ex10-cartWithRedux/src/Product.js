import './Cards.css';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

function Product({ data }) {
    const dispatch = useDispatch();

    function AddToCart(e) {
        dispatch({ type: 'BUY', data }); //vemos como centralizamos todo en redux y como podemos pasar parametros que funcionan como action.data en este caso
    }

    return (
        <div onClick={(e) => AddToCart(e)} className="cards">
            <div>
                <div
                    className="photo"
                    style={{ backgroundImage: `url(${data.image})` }}
                />
                <div className="info">
                    <p>
                        <FormattedMessage id="cart.name" /> {data.nombre}
                    </p>
                    <p>
                        <FormattedMessage id="cart.price" /> {data.precio}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;
