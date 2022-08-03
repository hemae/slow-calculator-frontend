export type BasePathsKeys =
    'forms'
    | 'inputElements'
    | 'formInputElements'
    | 'calculate'

export type BasePaths =
    '/forms'
    | '/input-elements'
    | '/form-input-elements'
    | '/calculate'

export default {
    forms: '/forms',
    inputElements: '/input-elements',
    formInputElements: '/form-input-elements',
    calculate: '/calculate',
} as Record<BasePathsKeys, BasePaths>
