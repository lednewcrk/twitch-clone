import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Avatar } from '../components/Avatar'
import { DiscoverScreen } from '../screens'
import { Colors } from '../values/colors'
import { DiscoverScreenParamList, Screens } from './types'

const Stack = createNativeStackNavigator<DiscoverScreenParamList>()

export function DiscoverScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.DiscoverScreen}
                component={DiscoverScreen}
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
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
