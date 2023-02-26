import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from '@react-navigation/native-stack'
import { Colors } from '../values/colors'
import { HomeTabs } from './home.tabs'
import { MainStackParamList, Tabs } from './types'

const Stack = createNativeStackNavigator<MainStackParamList>()

const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.background
    },
    headerTitleStyle: {
        color: Colors.text
    }
}

export function MainStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name={Tabs.HomeTabs}
                component={HomeTabs}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}
