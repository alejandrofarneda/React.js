import { FormattedMessage, FormattedNumber } from 'react-intl';
import { useSelector } from 'react-redux';

function Cart() {
    const contents = useSelector((c) => c.cart);
    console.log(contents);
    let total = 0;
    if (contents) {
        contents.forEach((e) => {
            total += e.cantidad * e.precio;
        });
    }
    return (
        <div className="chart">
            <h1>
                <FormattedMessage id="cart.title" />
            </h1>
            {contents && (
                <div>
                    {contents.map((e, i) => (
                        <div key={i} className="tobuy">
                            <div
                                className="photo"
                                style={{
                                    backgroundImage: `url(${e.image})`,
                                }}
                            />
                            <div>
                                <FormattedMessage id="cart.product" />
                                {e.nombre}
                            </div>
                            <div>
                                <FormattedMessage id="cart.price" />
                                <FormattedNumber
                                    style="currency"
                                    value={e.precio}
                                    currency="EUR"
                                />
                            </div>
                            <div>
                                <FormattedMessage
                                    id="cart.quantity"
                                    values={{ n: e.cantidad }}
                                />
                            </div>
                            <p></p>
                        </div>
                    ))}
                </div>
            )}
            <p></p>
            <p></p>
            <p></p>
            <div>
                <FormattedMessage
                    id="cart.total"
                    values={{
                        total: (
                            <FormattedNumber
                                style="currency"
                                value={total}
                                currency="EUR"
                            />
                        ),
                    }}
                />
            </div>
        </div>
    );
}

export default Cart;
