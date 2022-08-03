import usePopUpProps from '@UI/PopUp/usePopUpProps'
import {MouseEventHandler} from 'react'
import {useAppDispatch} from '@store'
import {closePopUp} from '@slices/popUp'

type Returned = {
    notification: string
    submitClick: MouseEventHandler
}

export default function useNotification(): Returned {

    const {notification} = usePopUpProps<{notification: string}>({renderingComponent: 'Notification'})!

    const dispatch = useAppDispatch()

    const submitClick: MouseEventHandler = () => {
        dispatch(closePopUp())
    }

    return {
        notification,
        submitClick
    }
}
