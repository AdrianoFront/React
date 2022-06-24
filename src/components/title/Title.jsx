import styles from "./Title.module.css"

/* Exemplo de componente React com children(Filhos)
 */

function Title (props) {
  return (
    <h1 className={styles.title}>
      {props.children}
    </h1>
  )
}

export default Title
