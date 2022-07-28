import {MouseEventHandler, useCallback, useEffect, useState} from 'react'
import router, {useRouter} from 'next/router'
import appRoutes from '@appRoutes'


type Returned = {
    logoClick: MouseEventHandler
    logoInteractive: boolean
}

export default function useHeader(): Returned {

    const [logoInteractive, setLogoInteractive] = useState<boolean>(true)

    const {pathname} = useRouter()

    useEffect(() => {
        if (pathname === appRoutes.index) setLogoInteractive(false)
        else setLogoInteractive(true)
    }, [pathname])

    const logoClick: MouseEventHandler = useCallback((): void => {
        if (pathname !== appRoutes.index) router.push(appRoutes.index)
    }, [pathname])

    return {
        logoClick,
        logoInteractive
    }
}
