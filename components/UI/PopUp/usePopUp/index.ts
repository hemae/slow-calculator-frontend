import {useEffect} from 'react'
import {useAppSelector} from '@store'
import {PopUpsOptions} from '@slices/popUp/types'
import useHTMLScrollable from '@hooks/useHTMLScrollable'


type Returned = {
    popUps: PopUpsOptions[]
}

export default function usePopUps(): Returned {

    const {popUps} = useAppSelector(state => state.popUp)

    const {setScrollable} = useHTMLScrollable()

    useEffect(() => {
        if (popUps.length) setScrollable(false)
        else setScrollable(true)
    }, [popUps.length, setScrollable])

    return {
        popUps
    }
}
