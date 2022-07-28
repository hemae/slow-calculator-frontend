import {Entity, UniqueNum} from '@apiModels/common'


export type FormRootKey =
    'adder'
    | 'subtractor'
    | 'multiplier'
    | 'divider'

export type Form = Entity<{
    order: UniqueNum
    publicVisible: boolean
    rootKey: FormRootKey
}, {
    name: string
    title: string
    description: string
}>
