import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 

                className={styles.cover} 
                src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />

            <div className={styles.profile}>
                <strong> Ragner Alves.</strong>
                <span> Developer </span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil.
                </a>
            </footer>
        </aside>
    )
}