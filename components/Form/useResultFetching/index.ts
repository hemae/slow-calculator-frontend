import {useAppSelector} from '@store'


type Returned = {
    isCalculateLoading: boolean
    result: string | null
}

export default function useResultFetching(): Returned {

    const {isCalculateLoading, result} = useAppSelector(state => state.calculate)

    return {
        isCalculateLoading,
        result
    }
}
