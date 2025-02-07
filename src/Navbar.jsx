import styles from './Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.navBar}>
            <h1>Useless</h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div></div>
        </div>
    )
}
export default Navbar