import AxiosApi from '@AxiosAPI'
import {CalculatePayload} from './types'
import basePaths from '@basePaths'
import {UniqueId} from '@apiModels/common'


export type RequestCalculateResponse = {data: UniqueId}
export type RequestResultResponse = {data: string}

export type CalculateApiOptions = {
    requestId?: UniqueId
    data?: CalculatePayload
}

const api = new AxiosApi({
    basePath: basePaths.calculate
})

const getCalculateAPI = () => ({
    requestCalculate({data}: CalculateApiOptions) {
        return api.getPromiseResponse<RequestCalculateResponse>({
            method: 'post',
            path: '/request-calculate',
            data
        })
    },
    requestResult({requestId}: CalculateApiOptions) {
        return api.getPromiseResponse<RequestResultResponse>({
            method: 'get',
            path: `/${requestId}`
        })
    },
})

export default getCalculateAPI
