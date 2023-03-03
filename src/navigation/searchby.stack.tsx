import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Avatar } from '../components/Avatar'
import { SearchByScreen } from '../screens'
import { Colors } from '../values/colors'

import { SearchByScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<SearchByScreenParamList>()

export function SearchByScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.SearchByScreen}
                component={SearchByScreen}
                options={{
                    title: '',
                    headerTitle: () => null,
                    headerStyle: {
                        backgroundColor: Colors.background
                    },
                    headerLeft: () => (
                        <Avatar
                            source={{
                                uri: 'https://criticalhits.com.br/wp-content/uploads/2022/04/blob_7gmc.jpg'
                            }}
                            fadeAnimationIsEnabled={false}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
