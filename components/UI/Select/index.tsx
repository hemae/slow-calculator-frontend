import {
    memo,
    DetailedHTMLProps,
    HTMLAttributes
} from 'react'
import styles from './Select.module.scss'
import classNames from 'classnames'
import Triangle from '../../../public/triangle.svg'
import useSelect from '@UI/Select/useSelect'


export type SelectProps = {
    id?: string
    options: string[]
    value: string
    onChange: (value: string) => void
    disabled?: boolean
}

export const Select = memo<SelectProps>((props) => {

    const {
        id,
        options,
        value,
        onChange,
        disabled = false
    } = props

    const {
        isSelectActive,
        onSelectClick,
        onOptionClick,
        onOptionTouch,
        onSelectOver,
        onSelectLeave
    } = useSelect({value, onChange, disabled})

    return (
        <div
            id={id}
            className={classNames(
                styles.main,
                {[styles.active]: isSelectActive && !disabled},
                {[styles.disabled]: disabled}
            )}
            onClick={onSelectClick}
            onMouseOver={onSelectOver}
            onMouseLeave={onSelectLeave}
        >
            <div
                className={classNames(
                    styles.main__triangle,
                    {[styles.active]: isSelectActive}
                )}
            ><Triangle/></div>
            <span
                className={styles.main__selected}
            >{value}</span>

            <div
                className={classNames(
                    styles.main__options,
                    {[styles.active]: isSelectActive}
                )}
            >
                {options?.map((option, index) => {
                    return (
                        <div
                            key={option}
                            onClick={onOptionClick(option)}
                            onTouchStart={onOptionTouch(option)}
                        >{option}</div>
                    )
                })}
            </div>
        </div>
    )
})
