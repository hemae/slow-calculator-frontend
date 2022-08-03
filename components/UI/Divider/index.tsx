import {DetailedHTMLProps, FC, HTMLAttributes, memo} from 'react'
import styles from './Divider.module.scss'


export const Divider = memo<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>(
    (props) => <div {...props} className={styles.main}/>
)
