import styles from "@/components/Product.module.css";
import Popup from 'reactjs-popup';

export const PRODUCTS = {
    // categorias
    'Principais': [
        // produtos
        {
            name: 'Baú',
            price: 5.00,
            description: 'Placeholder',
            expanded_description: 'Placeholder',
            icon: 'https://minecraft.wiki/images/thumb/Chest.gif/150px-Chest.gif?ca959',
            command: 'discord broadcast Placeholder'
        },
        {
            name: 'Home',
            price: 2.00,
            description: 'Adicione ainda mais um ponto de /home no seu jogo e facilite sua vida no SMP!',
            expanded_description: 'Cansado de ter que escolher entre sua casa, sua farm ou sua base secreta? Com esse produto, você ganha mais um slot de /home permanente! Assim, pode se teletransportar com facilidade para mais lugares importantes no seu mundo. Prático, rápido e perfeito pra quem joga sério.',
            icon: 'https://minecraft.wiki/images/Ender_Pearl_JE3_BE2.png?829a7',
            command: 'discord broadcast home',
        },
        {
            name: 'Unban',
            price: 5.00,
            description: 'Placeholder',
            expanded_description: 'Placeholder',
            icon: 'https://media.forgecdn.net/avatars/thumbnails/307/486/256/256/637388451783712242.png',
            command: 'discord broadcast Placeholder'
        },
    ],
    'Gemas': [
        {
            name: 'Placeholder',
            price: 5.00,
            description: 'Placeholder',
            expanded_description: 'Placeholder',
            icon: 'https://minecraft.wiki/images/Emerald_JE3_BE3.png?4c5f3',
            command: 'discord broadcast Placeholder'
        },
        {
            name: 'Placeholder',
            price: 5.00,
            description: 'Placeholder',
            expanded_description: 'Placeholder',
            icon: 'https://minecraft.wiki/images/Emerald_JE3_BE3.png?4c5f3',
            command: 'discord broadcast Placeholder'
        },
        {
            name: 'Placeholder',
            price: 5.00,
            description: 'Placeholder',
            expanded_description: 'Placeholder',
            icon: 'https://minecraft.wiki/images/Emerald_JE3_BE3.png?4c5f3',
            command: 'discord broadcast Placeholder'
        },
    ],
    'Cosméticos': [
        {
            name: 'Cor no nick',
            price: 5.00,
            description: 'Placeholder',
            expanded_description: 'Placeholder',
            icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/37/Light_Blue_Wool_JE3_BE3.png/revision/latest?cb=20200315193219',
            command: 'discord broadcast Placeholder'
        },
        {
            name: 'Qualquer cor no nick',
            price: 5.00,
            description: 'Placeholder',
            expanded_description: 'Placeholder',
            icon: 'https://static.wikia.nocookie.net/minecraft/images/1/14/WoolColorsNew.gif/revision/latest?cb=20190922185310',
            command: 'discord broadcast Placeholder'
        },
    ],
    'VIP': [
        {
            name: 'VIP',
            price: 10.00,
            description: 'Ganhe destaque no servidor com o VIP! Prefixo colorido, acesso a comandos exclusivos e mais visibilidade na comunidade.',
            expanded_description: 'Com o VIP do SMP Raiz, você mostra que é raiz de verdade. Receba um prefixo especial no chat, destaque nos rankings e acesso a comandos exclusivos que facilitam sua vida no servidor. Além disso, você ajuda a manter o projeto no ar! Um jeito de jogar com estilo e ainda apoiar o servidor.',
            icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Iron_Ingot_JE3_BE2.png/revision/latest/thumbnail/width/360/height/360?cb=20230613175240',
            command: 'discord broadcast vip',
        },
        {
            name: 'VIP+',
            price: 10.00,
            description: 'Ganhe destaque no servidor com o VIP! Prefixo colorido, acesso a comandos exclusivos e mais visibilidade na comunidade.',
            expanded_description: 'Com o VIP do SMP Raiz, você mostra que é raiz de verdade. Receba um prefixo especial no chat, destaque nos rankings e acesso a comandos exclusivos que facilitam sua vida no servidor. Além disso, você ajuda a manter o projeto no ar! Um jeito de jogar com estilo e ainda apoiar o servidor.',
            icon: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6',
            command: 'discord broadcast vip',
        },
        {
            name: 'VIP MVP',
            price: 10.00,
            description: 'Ganhe destaque no servidor com o VIP! Prefixo colorido, acesso a comandos exclusivos e mais visibilidade na comunidade.',
            expanded_description: 'Com o VIP do SMP Raiz, você mostra que é raiz de verdade. Receba um prefixo especial no chat, destaque nos rankings e acesso a comandos exclusivos que facilitam sua vida no servidor. Além disso, você ajuda a manter o projeto no ar! Um jeito de jogar com estilo e ainda apoiar o servidor.',
            icon: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00&20200325185152',
            command: 'discord broadcast vip',
        },
    ],
}

function ProductPopup({ product }) {
    return <>
        <Popup
            trigger={<button className="button"> COMPRAR! </button>}
            modal
            nested
        >
            {close => (
                <div className="modal">

                    <header className="header"> <img src={product.icon} alt={`Ícone de ${product.name}`} /> {product.name} </header>

                    <main className="content"> {product.expanded_description} </main>

                    <footer className="actions">

                        <a onClick={() => {close()}}>
                            Cancelar
                        </a>

                        <button onClick={() => {
                            fetch('/api/command', {
                                method: 'POST', 
                                headers: {
                                    'Content-Type': 'application/json', 
                                },
                                body: JSON.stringify({command: product.command})
                            })
                        }}>
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
            <section>
                <h3>{product.name} <span>R${product.price}</span></h3>

                <img src={product.icon} alt={`Ícone de ${product.name}`} />
            </section>

            <p>{product.description}</p>

            <ProductPopup product={product} />

        </div>
    )
}