import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { Colors } from '../values/colors'
import { HomeTabsParamList, Screens } from './types'
import { FollowingScreenStack } from './following.stack'
import { DiscoverScreenStack } from './discover.stack'
import { LookForScreenStack } from './lookfor.stack'
import { SearchByScreenStack } from './searchby.stack'
import { TwitchCloneConstants } from '../values/constants'

const Tab = createMaterialBottomTabNavigator<HomeTabsParamList>()

function getTabIcon(name: any, color: string) {
    return <MaterialCommunityIcons name={name} color={color} size={26} />
}

export function HomeTabs() {
    return (
        <Tab.Navigator
            activeColor={Colors.primaryLight}
            inactiveColor={Colors.text}
            barStyle={{
                backgroundColor: Colors.background,
                height: TwitchCloneConstants.BOTTOM_TAB_HEIGHT
            }}
        >
            <Tab.Screen
                name={Screens.FollowingStack}
                component={FollowingScreenStack}
                options={{
                    tabBarLabel: 'Seguindo',
                    tabBarIcon: ({ color, focused }) =>
                        getTabIcon(focused ? 'heart' : 'heart-outline', color)
                }}
            />
            <Tab.Screen
                name={Screens.DiscoverStack}
                component={DiscoverScreenStack}
                options={{
                    tabBarLabel: 'Descubra',
                    tabBarIcon: ({ color, focused }) =>
                        getTabIcon(
                            focused ? 'compass' : 'compass-outline',
                            color
                        )
                }}
            />
            <Tab.Screen
                name={Screens.LookForStack}
                component={LookForScreenStack}
                options={{
                    tabBarLabel: 'Procurar',
                    tabBarIcon: ({ color, focused }) =>
                        getTabIcon(
                            focused ? 'card-multiple' : 'card-multiple-outline',
                            color
                        )
                }}
            />
            <Tab.Screen
                name={Screens.SearchByStack}
                component={SearchByScreenStack}
                options={{
                    tabBarLabel: 'Busca',
                    tabBarIcon: ({ color }) => getTabIcon('magnify', color)
                }}
            />
        </Tab.Navigator>
    )
}
