import Popup from 'reactjs-popup';

export default function ProductPopup({ product }) {
    return <>
        <Popup
            trigger={<button className="button"> COMPRAR! </button>}
            modal
            nested
        >
            {close => (
                <div className="modal">

                    <header className="header"> Modal Title </header>

                    <main className="content">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                    </main>

                    <footer className="actions">

                        <button
                            className="button"
                            onClick={() => {
                            console.log('modal closed ');
                            close();
                            }}
                        >
                            close modal
                        </button>

                        <a
                            className="button"
                            onClick={() => {
                            console.log('modal closed ');
                            close();
                            }}
                        >
                            close modal
                        </a>

                    </footer>
                </div>
            )}
        </Popup>
    </>
}