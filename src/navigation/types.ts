export enum Screens {
    FollowingScreen = 'FollowingScreen',
    DiscoverScreen = 'DiscoverScreen',
    SearchForScreen = 'SearchForScreen',
    SearchByScreen = 'SearchByScreen'
}

export enum Tabs {
    HomeTabs = 'HomeTabs'
}

export type MainStackParamList = {
    [Tabs.HomeTabs]: undefined
}

export type HomeTabsParamList = {
    [Screens.FollowingScreen]: undefined
    [Screens.DiscoverScreen]: undefined
    [Screens.SearchForScreen]: undefined
    [Screens.SearchByScreen]: undefined
}
