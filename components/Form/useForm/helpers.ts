import {InputElement} from '@apiModels/inputElement'
import {UniqueId} from '@apiModels/common'
import {Operation} from '@store/API/calculateAPI/types'


export function getInitialForm(inputElements: InputElement[]): Record<UniqueId, string> {
    let initialForm: Record<UniqueId, string> = {}
    inputElements.forEach(inputElement => initialForm[inputElement.id] = '')
    return initialForm
}

export function optionTranslator<Type1 extends string = string, Type2 extends string = string>(options: [Type1, Type2][]) {
    return function (value: Type1 | Type2): Type1 | Type2 {
        const pair = options.find(p => p.includes(value))
        return pair?.filter(el => el !== value)[0] || '' as Type1 | Type2
    }
}

export function getOptionTranslators(inputElements: InputElement[]): Record<UniqueId, (value: string) => string> {

    let optionTranslators: Record<UniqueId, (value: string) => string> = {}

    inputElements
        .filter(inputElement => inputElement.type === 'select')
        .forEach(inputElement => {
            optionTranslators[inputElement.id] = optionTranslator(inputElement.data.items!.map(item => [item.value, item.title]))
        })

    return optionTranslators
}

const formTypeBase: [string, Operation][] = [
    ['adder', '+'],
    ['subtractor', '-'],
    ['multiplier', '*'],
    ['divider', '/'],
]

export const formTypeTranslator = optionTranslator<string, Operation>(formTypeBase) as (value: string) => Operation
