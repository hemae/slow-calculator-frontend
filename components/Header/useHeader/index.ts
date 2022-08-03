import {MouseEventHandler, useCallback, useEffect, useState} from 'react'
import router, {useRouter} from 'next/router'
import appRoutes from '@appRoutes'
import {showPopUp} from '@slices/popUp'
import {useAppDispatch, useAppSelector} from '@store'


type Returned = {
    logoClick: MouseEventHandler
    logoInteractive: boolean
}

export default function useHeader(): Returned {

    const dispatch = useAppDispatch()

    const {isCalculateLoading} = useAppSelector(state => state.calculate)

    const [logoInteractive, setLogoInteractive] = useState<boolean>(true)

    const {pathname} = useRouter()

    useEffect(() => {
        if (pathname === appRoutes.index) setLogoInteractive(false)
        else setLogoInteractive(true)
    }, [pathname])

    const logoClick: MouseEventHandler = useCallback((event): void => {
        if (isCalculateLoading) {
            dispatch(showPopUp({
                renderingComponent: 'Notification',
                props: {notification: 'Подождите, пока закончатся вычисления'}
            }))
        } else {
            if (pathname !== appRoutes.index) router.push(appRoutes.index)
        }
    }, [pathname, isCalculateLoading])

    return {
        logoClick,
        logoInteractive
    }
}
