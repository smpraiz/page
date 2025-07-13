import styles from "@/layout/MainLayout.module.css"
import { useRouter } from "next/router";
import Link from "next/link";

/**
 * Layout principal do site
 * @param {Object} properties
 * @param {Element} properties.children - Elementos dentro do main layout
 * @returns 
 */
export default function MainLayout({ children }) {
    const router = useRouter();

    const navLinks = [
        { href: "/", label: "Início" },
        { href: "/discord", label: "Discord" },
        { href: "/terms", label: "Termos" },
        { href: "/privacy", label: "Privacidade" },
    ];

    return (
        <>
            <header className={styles.header}>
                <h1>SMP Raiz</h1>

                <nav>
                    {navLinks.map(link => (
                        <Link
                            key={link.href + link.label}
                            href={link.href}
                            className={
                                router.pathname === link.href
                                    ? `${styles.navLink} ${styles.navLinkActive}`
                                    : styles.navLink
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

            </header>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}