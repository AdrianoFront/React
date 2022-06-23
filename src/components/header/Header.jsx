import styles from '/Header.modules.css'

function Header ({ children }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>{ children }
      </div>      
    </header>
  )
}

export default Header