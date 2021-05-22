import { useCart } from "./CartContent";

function Cart() {

    const contents = useCart()
    let total = 0
    
    contents.forEach(e => {
        total += e.cantidad * e.precio;
    });
    return (
        <div className="chart">
            <h3>Carro</h3>
            {contents && (
                <div className="tobuy">
                    {contents.map((e, i) => (
                        <div key={i}>
                            <div>Nombre: {e.nombre}</div>
                            <div>Precio: ${e.precio}</div>
                            <div>
                                Cantidad:
                                {e.cantidad}
                            </div>
                            <p></p>
                            <p></p>
                        </div>
                    ))}
                </div>
            )}
            <p></p>
            <p></p>
            <p></p>
            <div>Total: {total}</div>
        </div>
    );
}

export default Cart;
