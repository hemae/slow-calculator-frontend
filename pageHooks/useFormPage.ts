import {useAppDispatch} from '@store'
import {useEffect} from 'react'
import {clearResult} from '@slices/calculate'


export default function useFormPage(): void {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearResult())
    }, [])

}
