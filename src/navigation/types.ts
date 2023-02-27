export enum Screens {
    FollowingScreen = 'FollowingScreen',
    DiscoverScreen = 'DiscoverScreen',
    SearchByScreen = 'SearchByScreen',
    LookForScreen = 'LookForScreen',

    FollowingStack = 'FollowingStack',
    DiscoverStack = 'DiscoverStack',
    SearchByStack = 'SearchByStack',
    LookForStack = 'LookForStack'
}

export type HomeTabsParamList = {
    [Screens.FollowingStack]: undefined
    [Screens.DiscoverStack]: undefined
    [Screens.SearchByStack]: undefined
    [Screens.LookForStack]: undefined
}

export type FollowingScreenParamList = {
    [Screens.FollowingScreen]: undefined
}

export type DiscoverScreenParamList = {
    [Screens.DiscoverScreen]: undefined
}

export type SearchByScreenParamList = {
    [Screens.SearchByScreen]: undefined
}

export type LookForScreenParamList = {
    [Screens.LookForScreen]: undefined
}
