import {FC} from 'react'
import styles from './Header.module.scss'
import useHeader from '@components/Header/useHeader'
import classNames from 'classnames'


export const Header: FC = () => {

    const {
        logoClick,
        logoInteractive
    } = useHeader()

    return (
        <header
            className={styles.main}
        >
            <h1
                onClick={logoClick}
                className={classNames({[styles.interactive]: logoInteractive})}
            >{process.env.APPLICATION_TITLE}</h1>
        </header>
    )
}
