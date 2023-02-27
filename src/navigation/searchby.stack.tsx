import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchByScreen } from '../screens'

import { SearchByScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<SearchByScreenParamList>()

export function SearchByScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.SearchByScreen}
                component={SearchByScreen}
            />
        </Stack.Navigator>
    )
}
