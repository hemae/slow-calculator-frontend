import {combineReducers, configureStore} from '@reduxjs/toolkit'

// reducers
import {

    authSlice,

    alertSlice,
    settingsSlice,
    popUpSlice
} from '@slices'

// redux
import {createWrapper} from 'next-redux-wrapper'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'


const reducer = combineReducers({

    auth: authSlice.reducer,

    popUp: popUpSlice.reducer,
    settings: settingsSlice.reducer,
    alert: alertSlice.reducer
})

const setupStore = () => configureStore({
    reducer,
    devTools: true
})

const store = setupStore()

export type State = ReturnType<typeof reducer>
export type Store = ReturnType<typeof setupStore>
export type Dispatch = typeof store.dispatch

export const wrapper = createWrapper<Store>(setupStore)

export const slices = {
    authSlice,

    alertSlice,
    settingsSlice,
    popUpSlice
}

export const useAppDispatch = () => useDispatch<Dispatch>()
export const useAppSelector: TypedUseSelectorHook<State> = useSelector

export default store
