import {Entity, UniqueNum} from '@apiModels/common'
import {InputElement} from '@apiModels/inputElement'


export type FormRootKey =
    'adder'
    | 'subtractor'
    | 'multiplier'
    | 'divider'

export type Form = Entity<{
    order: UniqueNum
    publicVisible: boolean
    rootKey: FormRootKey
    inputElements: InputElement[]
}, {
    name: string
    title: string
    description: string
}>
