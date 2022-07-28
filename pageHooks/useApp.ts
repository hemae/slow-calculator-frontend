import {useEffect} from 'react'
import {useAppDispatch} from '@store'
import {setClientData} from '@slices/settings'
import useUnauthorized from '@appHooks/useUnauthorized'


export default function useApp(): void {

    useUnauthorized()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setClientData())
    }, [])
}
