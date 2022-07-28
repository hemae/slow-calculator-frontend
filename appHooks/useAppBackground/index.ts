import {useEffect} from 'react'


export default function useAppBackground(): void {

    useEffect(() => {
        document.getElementById('__next')?.classList.add('background')
    }, [])
}
