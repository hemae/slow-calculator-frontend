import {useAppSelector} from '@store'
import {MouseEventHandler, TouchEventHandler, useCallback, useEffect, useState} from 'react'


type Options = {
    value: string
    onChange: (value: string) => void
    disabled: boolean
}

type Returned = {
    isSelectActive: boolean
    onSelectClick: MouseEventHandler
    onOptionClick: (value: string) => MouseEventHandler
    onOptionTouch: (value: string) => TouchEventHandler
    onSelectOver: MouseEventHandler
    onSelectLeave: MouseEventHandler
}

export default function useSelect(options: Options): Returned {

    const {
        value,
        onChange,
        disabled
    } = options

    const {touchableDevice} = useAppSelector(state => state.settings)

    const [localValue, setLocalValue] = useState<string>(value as string)
    const [isSelectActive, setIsSelectActive] = useState<boolean>(false)
    const [selectOvered, setSelectOvered] = useState<boolean>(false)

    const clickHandler = useCallback((): void => {
        if (!selectOvered) setIsSelectActive(false)
    }, [selectOvered])

    useEffect(() => {
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    }, [clickHandler])

    useEffect(() => {
        setLocalValue(value as string)
    }, [value])

    const onSelectOver: MouseEventHandler = () => {
        setSelectOvered(true)
    }

    const onSelectLeave: MouseEventHandler = () => {
        setSelectOvered(false)
    }

    const onSelectClick: MouseEventHandler = useCallback(() => {
        if (!disabled) setIsSelectActive(prev => !prev)
    }, [disabled])

    const onOptionClick = (value: string): MouseEventHandler => (event): void => {
        if (value !== localValue && !touchableDevice) {
            onChange(value)
            setLocalValue(value)
        }
        setIsSelectActive(false)
        event.stopPropagation()
    }

    const onOptionTouch = (value: string): TouchEventHandler => (event): void => {
        if (value !== localValue && touchableDevice) {
            onChange(value)
            setLocalValue(value)
        }
        setIsSelectActive(false)
        event.stopPropagation()
    }

    return {
        isSelectActive,
        onSelectClick,
        onOptionClick,
        onOptionTouch,
        onSelectOver,
        onSelectLeave
    }
}
