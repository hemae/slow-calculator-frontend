import {MouseEventHandler, TouchEventHandler, useCallback, useEffect, useState} from 'react'
import router, {useRouter} from 'next/router'
import useMouseTouchEvents from '@hooks/useMouseTouchEvents'


type Options = {
    basePath: string
}

type Returned = {
    toggleClick: MouseEventHandler
    sideBarClick: MouseEventHandler
    sideBarShown: boolean
    backgroundHidden: boolean
    backgroundShown: boolean,
    sideBarTouchStart: TouchEventHandler
    sideBarMove: TouchEventHandler
    sideBarTouchEnd: TouchEventHandler
}

export default function useSideBar(options: Options): Returned {

    const {basePath} = options

    const [sideBarShown, setSideBarShown] = useState<boolean>(false)
    const [backgroundHidden, setBackgroundHidden] = useState<boolean>(true)
    const [backgroundShown, setBackgroundShown] = useState<boolean>(false)

    const {query} = useRouter()

    const switchSideBar = useCallback((): void => {
        setSideBarShown(prev => {
            if (prev) router.push(basePath)
            else router.push(`${basePath}?side-bar=true`)
            return !prev
        })
    }, [basePath])

    useEffect(() => {
        if (!query['side-bar']) setSideBarShown(false)
    }, [query['side-bar'], switchSideBar])

    const toggleClick: MouseEventHandler = useCallback((event) => {
        event.stopPropagation()
        switchSideBar()
    }, [switchSideBar])

    const sideBarClick: MouseEventHandler = useCallback(() => {
        if (!sideBarShown) switchSideBar()
    }, [sideBarShown, switchSideBar])

    useEffect(() => {
        if (sideBarShown) setBackgroundHidden(false)
        else setBackgroundShown(false)
    }, [sideBarShown])

    useEffect(() => {
        if (!backgroundHidden) setTimeout(() => setBackgroundShown(true), 20)
    }, [backgroundHidden])

    useEffect(() => {
        if (!backgroundShown) setTimeout(() => setBackgroundHidden(true), 200)
    }, [backgroundShown])

    const {
        touchStart,
        touchMove,
        touchEnd,
        downX,
        x
    } = useMouseTouchEvents({})

    const sideBarTouchStart: TouchEventHandler = (event) => {
        touchStart(event)
    }

    const sideBarMove: TouchEventHandler = (event) => {
        touchMove(event)
    }

    const sideBarTouchEnd: TouchEventHandler = useCallback((event) => {
        touchEnd(event)
        if ((downX || 0) - x > 20) switchSideBar()
    }, [downX, x, switchSideBar])

    return {
        toggleClick,
        sideBarClick,
        sideBarShown,
        backgroundHidden,
        backgroundShown,
        sideBarTouchStart,
        sideBarMove,
        sideBarTouchEnd
    }
}
