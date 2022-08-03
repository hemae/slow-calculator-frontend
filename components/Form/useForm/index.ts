import {ChangeEventHandler, FormEventHandler, useEffect, useMemo, useState} from 'react'
import {InputElement, InputElementType} from '@apiModels/inputElement'
import {UniqueId} from '@apiModels/common'
import {formTypeTranslator, getInitialForm, getOptionTranslators} from '@components/Form/useForm/helpers'
import {FormRootKey} from '@apiModels/form'
import {useAppDispatch} from '@store'
import {requestCalculate} from '@slices/calculate/calculateThunkCreators'
import {Operation} from '@store/API/calculateAPI/types'
import {clearResult} from '@slices/calculate'


type Options = {
    formType: FormRootKey
    inputElements: InputElement[]
}

type Returned = {
    submit: FormEventHandler<HTMLFormElement>
    form: Record<UniqueId, string>
    formChange: (id: UniqueId, type: InputElementType) => ChangeEventHandler<HTMLInputElement> | ((value: string) => void)
    optionTranslators: Record<UniqueId, (value: string) => string>
}

export default function useForm(options: Options): Returned {

    const {
        formType,
        inputElements
    } = options

    const dispatch = useAppDispatch()

    const [form, setForm] = useState<Record<UniqueId, string>>(getInitialForm(inputElements))

    const optionTranslators = getOptionTranslators(inputElements)

    const formChange = (id: UniqueId, type: InputElementType): ChangeEventHandler<HTMLInputElement> | ((value: string) => void) => (event: any): void => {
        let target = ''
        if (type === 'number') target = event.target.value
        if (type === 'select') target = optionTranslators[id](event)
        setForm(prev => ({
            ...prev,
            [id]: target
        }))
    }

    const submit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const data: {nums: number[], texts: string[], operation: Operation} = {
            nums: [],
            texts: [],
            operation: formTypeTranslator(formType)
        }

        Object
            .keys(form)
            .forEach(key => {
                const inputElement = inputElements.find(iE => iE.id === key)!
                if (inputElement.type === 'number') data.nums.push(+form[key])
                if (inputElement.type === 'select') data.texts.push(form[key])
            })

        dispatch(clearResult())
        dispatch(requestCalculate({data}))
    }

    return {
        submit,
        formChange,
        form,
        optionTranslators
    }
}
