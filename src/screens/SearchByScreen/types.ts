import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SearchByScreenParamList, Screens } from '../../navigation/types'

export type SearchByScreenProps = NativeStackScreenProps<
    SearchByScreenParamList,
    Screens.SearchByScreen
>
