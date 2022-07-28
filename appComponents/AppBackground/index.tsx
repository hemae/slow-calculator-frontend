import {FC} from 'react'
import styles from './AppBackground.module.scss'


export const AppBackground: FC = () => {

    return (
        <>
            <section
                id='background'
                className={styles.background}
                style={{backgroundImage: `url(/main-background.jpeg)`}}
            />
            <section
                id='pale'
                className={styles.pale}
            />
        </>
    )
}
