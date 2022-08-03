import {Entity} from '@apiModels/common'


export type InputElementType =
    'number'
    | 'select'

export type InputElementItem = {
    value: string
    title: string
}

export type InputElement = Entity<{
    type: InputElementType
}, {
    title: string
    items: InputElementItem[] | null
}>
