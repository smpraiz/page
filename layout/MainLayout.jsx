import styles from "@/layout/MainLayout.module.css"

/**
 * Layout principal do site
 * @param {Object} properties
 * @param {Element} properties.children - Elementos dentro do main layout
 * @returns 
 */
export default function MainLayout({ children }) {
    return (
        <>
            {/* <Header /> */}
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}