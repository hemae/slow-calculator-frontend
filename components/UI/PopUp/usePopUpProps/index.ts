import {PopUpType} from '@components/UI/PopUp/PopUps'
import {useAppSelector} from '@store'


type Options = {
    renderingComponent: PopUpType
}

export default function usePopUpProps<PopUpProps>(options: Options): PopUpProps | null  {

    const {renderingComponent} = options

    const {popUps} = useAppSelector(state => state.popUp)

    const currentPopUp = popUps.find(popUp => popUp.renderingComponent === renderingComponent)

    if (!currentPopUp) return null

    return currentPopUp.props
}
