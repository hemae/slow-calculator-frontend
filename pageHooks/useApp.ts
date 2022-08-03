import {useEffect} from 'react'
import {useAppDispatch} from '@store'
import {setClientData} from '@slices/settings'


export default function useApp(): void {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setClientData())
    }, [])
}
