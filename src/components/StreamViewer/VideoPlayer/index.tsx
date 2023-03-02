import { Pressable } from 'react-native'
import Animated, {
    SharedValue,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import {
    MINIPLAYER_HEIGHT,
    MINIPLAYER_WIDTH,
    PLAYER_HEIGHT,
    PLAYER_WIDTH
} from '../Constants'

import { styles } from './styles'

export type VideoPlayerProps = {
    isMiniPlayer: SharedValue<boolean>
    onPress?: () => void
    translateX: SharedValue<number>
}

export function VideoPlayer({
    isMiniPlayer,
    onPress,
    translateX
}: VideoPlayerProps) {
    const playerWidth = useSharedValue(PLAYER_WIDTH)
    const playerHeight = useSharedValue(PLAYER_HEIGHT)

    useAnimatedReaction(
        () => isMiniPlayer.value,
        result => {
            if (result) {
                playerWidth.value = withTiming(MINIPLAYER_WIDTH)
                playerHeight.value = withTiming(MINIPLAYER_HEIGHT)
            } else {
                playerWidth.value = withTiming(PLAYER_WIDTH)
                playerHeight.value = withTiming(PLAYER_HEIGHT)
            }
        }
    )

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: playerWidth.value,
            height: playerHeight.value,
            transform: [{ translateX: translateX.value }]
        }
    })

    return (
        <Pressable onPress={onPress}>
            <Animated.View style={[styles.container, animatedStyles]} />
        </Pressable>
    )
}
