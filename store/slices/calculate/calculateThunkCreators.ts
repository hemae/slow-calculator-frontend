import {createAsyncThunk} from '@reduxjs/toolkit'
import {getError, getRejectError} from '../../thunkHandlers'
import {setAlert} from '@slices/alert'
import getCalculateAPI , {CalculateApiOptions} from '../../API/calculateAPI'


export const requestCalculate = createAsyncThunk(
    'requestCalculate',
    async (payload: CalculateApiOptions, thunkAPI) => {
        try {
            thunkAPI.dispatch(setAlert({message: 'Данные отправлены на сервер', type: 'notice'}))
            const response = await getCalculateAPI().requestCalculate(payload)
            thunkAPI.dispatch(requestResult({requestId: response.data.data}))
            return response.data.data
        } catch (e: any) {
            const error = getError(e)
            thunkAPI.dispatch(setAlert({message: error.message, type: 'error'}))
            return getRejectError(thunkAPI, error)
        }
    }
)

export const requestResult = createAsyncThunk(
    'requestResult',
    async (payload: CalculateApiOptions, thunkAPI) => {
        try {
            const response = await getCalculateAPI().requestResult(payload)
            if (!response.data.data) setTimeout(() => thunkAPI.dispatch(requestResult(payload)), 3000)
            return response.data.data
        } catch (e: any) {
            const error = getError(e)
            thunkAPI.dispatch(setAlert({message: error.message, type: 'error'}))
            return getRejectError(thunkAPI, error)
        }
    }
)
