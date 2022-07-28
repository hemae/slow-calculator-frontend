import {HTMLAttributes, memo} from 'react'
import styles from './Modal.module.scss'
import classNames from 'classnames'


export const Modal = memo<HTMLAttributes<HTMLDivElement>>(
    (props) => <section {...props} className={classNames(styles.modal, props.className)}/>
)
