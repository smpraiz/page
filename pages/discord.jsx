import Link from "next/link"

export default function Discord() {

    if(typeof window !== 'undefined') {
        window.location.replace('https://discord.gg/n3uCfqdr77')
    }


    return (
        <Link href={'https://discord.gg/n3uCfqdr77'}>
            <h1>Redirecionando pro Discord...</h1>
            <p>Se você não for redirecionado(a) em alguns instantes, clique aqui.</p>
        </Link>
    )
}