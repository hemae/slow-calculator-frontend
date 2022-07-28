import AxiosApi from '@AxiosAPI'
import {UploadPayload} from './types'


export type UploadResponse = {data: {imageLinks: string[]}}

export type UploadApiOptions = {
    isRussian?: boolean
    data?: UploadPayload
    chunkName: string
    target?: string
    token?: string | null
}

const apiApplication = new AxiosApi({
    basePath: '/upload',
    contentType: 'application/json'
})

const api = new AxiosApi({
    basePath: '/upload'
})

const getUploadAPI = () => ({
    upload({data, chunkName}: UploadApiOptions) {
        const formData = new FormData()
        data!.files!.forEach(file => formData.append(`images`, file))
        return apiApplication.getPromiseResponse<UploadResponse>({
            method: 'post',
            path: `/${chunkName}`,
            data: formData
        })
    },
    deleteImage({data, chunkName}: UploadApiOptions) {
        return api.getPromiseResponse<{message: string}>({
            method: 'post',
            path: `/delete/${chunkName}`,
            data
        })
    },
    getAllImages({chunkName, token}: UploadApiOptions) {
        return api.getPromiseResponse<{data: string[]}>({
            method: 'get',
            path: `/all/images/${chunkName}`,
            //@ts-ignore
            baseURL: (!!token || token === null) && process.env.BACKEND_API,
            token
        })
    }
})

export async function getAllImagesHandler(chunkName: string, token?: string | null): Promise<string[]> {
    return (await getUploadAPI().getAllImages({chunkName, token})).data.data
}

export default getUploadAPI
