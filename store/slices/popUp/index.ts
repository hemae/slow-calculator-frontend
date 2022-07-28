import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PopUpsOptions} from '@slices/popUp/types'


type PopUpState = {
    popUps: PopUpsOptions[]
}

const initialState: PopUpState = {
    popUps: []
}

export const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        showPopUp(state: PopUpState, action: PayloadAction<PopUpsOptions>) {
            state.popUps.push(action.payload)
        },
        closePopUp(state: PopUpState) {
            state.popUps = state.popUps.slice(0, state.popUps.length - 1)
        }
    }
})

export const showPopUp = popUpSlice.actions.showPopUp
export const closePopUp = popUpSlice.actions.closePopUp


export default popUpSlice.reducer
