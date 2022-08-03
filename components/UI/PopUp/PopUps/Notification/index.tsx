import {FC} from 'react'
import styles from './Notification.module.scss'
import useNotification from '@UI/PopUp/PopUps/Notification/useNotification'
import {Divider} from '@UI'


export const Notification: FC = () => {

    const {
        submitClick,
        notification
    } = useNotification()

    return (
        <div className={styles.main}>
            <p>{notification}</p>
            <Divider id='divider'/>
            <button
                onClick={submitClick}
            >ОК</button>
        </div>
    )
}
