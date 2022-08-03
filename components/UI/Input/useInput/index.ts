import {FocusEventHandler, MouseEventHandler, RefObject, useCallback, useRef, useState} from 'react'


type Options = {
    onFocus: FocusEventHandler<HTMLInputElement> | undefined
    onBlur: FocusEventHandler<HTMLInputElement> | undefined
    disabled?: boolean
}

type Returned = {
    placeholderClick: MouseEventHandler
    input: RefObject<HTMLInputElement>
    onFocus: FocusEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
    inputFocused: boolean
}

export default function useInput(options: Options): Returned {

    const {
        onFocus,
        onBlur,
        disabled = false
    } = options

    const input = useRef<HTMLInputElement>(null)

    const [inputFocused, setInputFocused] = useState<boolean>(false)

    const placeholderClick: MouseEventHandler = useCallback(() => {
        if (input?.current && !disabled) {
            input.current.focus()
            setInputFocused(true)
        }
    }, [input?.current, disabled])

    const focus: FocusEventHandler<HTMLInputElement> = (event) => {
        if (onFocus) onFocus(event)
        setInputFocused(true)
    }

    const blur: FocusEventHandler<HTMLInputElement> = (event) => {
        if (onBlur) onBlur(event)
        setInputFocused(false)
    }

    return {
        placeholderClick,
        input,
        onFocus: focus,
        onBlur: blur,
        inputFocused
    }
}
