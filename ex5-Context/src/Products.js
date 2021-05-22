import useFetch from './useFetch';
import Product from './Product';

function Products() {
    const url = 'https://run.mocky.io/v3/09257dec-566c-4cbe-a81b-54c864a6b9dc';
    const [products] = useFetch(url);
    

    return (
        <div>
            <div>
                <h2>Productos:</h2>
                {products && (
                    <div className="products">
                        {products.map((e, i) => (
                            <Product key={e.id} data={e} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
