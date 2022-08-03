import {FC, HTMLAttributes, memo, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import styles from './Input.module.scss'
import useInput from '@UI/Input/useInput'
import classNames from 'classnames'


export const Input: FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = memo<HTMLAttributes<HTMLInputElement>>((props) => {

    //@ts-ignore
    const {placeholder, value, disabled} = props

    const {
        input,
        placeholderClick,
        onFocus,
        onBlur,
        inputFocused
    } = useInput({onFocus: props.onFocus, onBlur: props.onBlur, disabled: disabled as boolean | undefined})

    return (
        <div
            className={styles.main}
        >
            {placeholder &&
            <label
                className={classNames(
                    {[styles.active]: inputFocused || value},
                    {[styles.nonText]: disabled}
                )}
                onClick={placeholderClick}
            >{placeholder.slice(0, 19)}</label>}
            <input
                ref={input}
                {...{...props, placeholder: undefined}}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </div>
    )
})
