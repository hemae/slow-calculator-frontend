import {FC} from 'react'
import {Notification} from './Notification'


export type PopUpType =
    'Notification'

export default {
    Notification
} as Record<PopUpType, FC>
