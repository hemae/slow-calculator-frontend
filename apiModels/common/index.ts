export type UniqueId = string
export type UniqueNum = number

export type Entity<Data, DataType = undefined> = {
    id: UniqueId
    data: DataType
    createdAt: string
    updatedAt: string
} & Data

export type ResponseData<DataType> = {data: DataType}

export type ErrorType = {
    status: number
    message: string
}
