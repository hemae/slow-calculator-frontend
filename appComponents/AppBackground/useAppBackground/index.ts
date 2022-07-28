import {useEffect, useState} from 'react'

type Options = {
    picturesCount: number
}

type Returned = {
    items: number[]
    isBackgroundShown: boolean
}

export default function useAppBackground(options: Options): Returned {

    const {picturesCount} = options

    const items = []

    for (let i = 0; i < picturesCount * 2; i++) items.push(i)

    const [isBackgroundShown, setIsBackgroundShown] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => setIsBackgroundShown(true), 8000)
    }, [])

    return {
        items,
        isBackgroundShown
    }
}
