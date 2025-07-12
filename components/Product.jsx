import styles from "@/components/Product.module.css";
import Popup from 'reactjs-popup';

export const PRODUCTS = [
    {
        name: 'VIP',
        description: 'A',
        expanded_description: 'Aa'
    },
    {
        name: 'Home',
        description: 'B',
        expanded_description: 'Bb'
    }
]

export function ProductPopup({ product }) {
    return <>
        <Popup
            trigger={<button className="button"> COMPRAR! </button>}
            modal
            nested
        >
            {close => (
                <div className="modal">

                    <header className="header"> {product.name} </header>

                    <main className="content"> {product.expanded_description} </main>

                    <footer className="actions">

                        <a onClick={() => {close()}}>
                            Cancelar
                        </a>

                        <button>
                            Comprar!
                        </button>

                    </footer>
                </div>
            )}
        </Popup>
    </>
}

export default function Product({ product }) {
    return (
        <div className={styles.product}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <ProductPopup product={product} />

        </div>
    )
}