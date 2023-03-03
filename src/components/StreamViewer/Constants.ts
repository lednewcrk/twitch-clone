import { Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { TwitchCloneConstants } from '../../values/constants'

// GENERAL CONSTANTS
export const STATUSBAR_HEIGHT = Constants.statusBarHeight
export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width
export const BOTTOM_TAB_HEIGHT = TwitchCloneConstants.BOTTOM_TAB_HEIGHT
export const MIDDLE_SCRREN = SCREEN_HEIGHT / 2

// PLAYER CONTANTS
export const PLAYER_WIDTH = SCREEN_WIDTH
export const PLAYER_HEIGHT = SCREEN_WIDTH * (1080 / 1920)
export const TRANSLATE_HEIGHT_BOUND = SCREEN_HEIGHT * 0.15

// MINIPLAYER CONSTANTS
export const MINIPLAYER_WIDTH = SCREEN_WIDTH * 0.4
export const MINIPLAYER_HEIGHT = MINIPLAYER_WIDTH * (1080 / 1920)
export const MINIPLAYER_MARGIN = 8
export const MINIPLAYER_TRANSLATE_X_BOUND = MINIPLAYER_WIDTH * 0.65

// UTILS
export const MAX_TRANSLATE_Y =
    SCREEN_HEIGHT - BOTTOM_TAB_HEIGHT - MINIPLAYER_HEIGHT - MINIPLAYER_MARGIN
