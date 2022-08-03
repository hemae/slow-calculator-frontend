import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {requestCalculate, requestResult} from './calculateThunkCreators'
import {ErrorType, UniqueId} from '@apiModels/common'


type CalculateState = {
    isCalculateLoading: boolean
    requestId: UniqueId | null
    result: string | null
    notice: string
    error: ErrorType | null
}

const initialState: CalculateState = {
    isCalculateLoading: false,
    requestId: null,
    result: null,
    notice: '',
    error: null,
}

export const calculateSlice = createSlice({
    name: 'calculate',
    initialState,
    reducers: {
        clearResult(state: CalculateState) {
            state.result = null
        },
        setError(state: CalculateState, action: PayloadAction<ErrorType | null>) {
            state.error = action.payload
        },
        setNotice(state: CalculateState, action: PayloadAction<string>) {
            state.notice = action.payload
        }
    },
    extraReducers: {
        [requestCalculate.pending.type]: (state: CalculateState) => {
            state.isCalculateLoading = true
        },
        [requestCalculate.fulfilled.type]: (state: CalculateState, action: PayloadAction<UniqueId>) => {
            state.error = null
            state.notice = 'Данные отправлены'
            state.requestId = action.payload
            state.isCalculateLoading = false
        },
        [requestCalculate.rejected.type]: (state: CalculateState, action: PayloadAction<string>) => {
            state.notice = ''
            state.error = JSON.parse(action.payload) as ErrorType
            state.isCalculateLoading = false
        },

        [requestResult.pending.type]: (state: CalculateState) => {
            state.isCalculateLoading = true
        },
        [requestResult.fulfilled.type]: (state: CalculateState, action: PayloadAction<string | null>) => {
            state.error = null
            state.notice = 'Данные отправлены'
            state.result = action.payload
            state.isCalculateLoading = !action.payload
        },
        [requestResult.rejected.type]: (state: CalculateState, action: PayloadAction<string>) => {
            state.notice = ''
            state.error = JSON.parse(action.payload) as ErrorType
            state.isCalculateLoading = false
        },
    }
})

export const clearResult = calculateSlice.actions.clearResult


export default calculateSlice.reducer
