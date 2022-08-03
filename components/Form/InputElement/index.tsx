import {ChangeEventHandler, memo} from 'react'
import {InputElement as InputElementType} from '@apiModels/inputElement'
import {Input, Select} from '@UI'
import {useAppSelector} from '@store'


type InputElementProps = {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement> | ((value: string) => void)
    inputElement: InputElementType
    options?: string[]
    placeholder?: string
}

export const InputElement = memo<InputElementProps>((props) => {

    const {
        value,
        onChange,
        inputElement,
        options,
        placeholder
    } = props

    const {isCalculateLoading} = useAppSelector(state => state.calculate)

    switch (inputElement.type) {
        case 'number':
            return (
                <Input
                    type='number'
                    value={value}
                    onChange={onChange as ChangeEventHandler<HTMLInputElement>}
                    placeholder={placeholder}
                    disabled={isCalculateLoading}
                />
            )
        case 'select':
            return (
                <Select
                    options={options!}
                    value={value}
                    onChange={onChange as (value: string) => void}
                    disabled={isCalculateLoading}
                />
            )
        default:
            return <></>
    }
})
