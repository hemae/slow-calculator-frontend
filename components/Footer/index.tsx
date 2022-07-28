import {memo} from 'react'
import styles from './Footer.module.scss'


type FooterProps = {

}

export const Footer = memo<FooterProps>((props) => {

    const {} = props

    return (
        <footer
            className={styles.main}
        >
            <p>{process.env.APPLICATION_TITLE}, {new Date().getFullYear()}</p>
        </footer>
    )
})
