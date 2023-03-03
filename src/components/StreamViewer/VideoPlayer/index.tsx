import { forwardRef, useState } from 'react'
import { Pressable } from 'react-native'
import Animated, {
    SharedValue,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import { Video, ResizeMode, VideoProps } from 'expo-av'
import {
    MINIPLAYER_HEIGHT,
    MINIPLAYER_WIDTH,
    PLAYER_HEIGHT,
    PLAYER_WIDTH
} from '../Constants'
import { styles } from './styles'
import { ActivityIndicator } from 'react-native-paper'

export type VideoPlayerProps = {
    isMiniPlayer: SharedValue<boolean>
    translateX: SharedValue<number>
    onPress?: () => void
}

export const VideoPlayer = forwardRef<Video, VideoPlayerProps>(
    ({ isMiniPlayer, onPress, translateX }, ref) => {
        const [isLoading, setIsLoading] = useState(false)
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

        const onLoadStart: VideoProps['onLoadStart'] = () => {
            setIsLoading(true)
        }

        const onLoad: VideoProps['onLoad'] = status => {
            setIsLoading(false)
        }

        const onError: VideoProps['onError'] = () => {
            setIsLoading(false)
        }

        return (
            <Pressable onPress={onPress}>
                <Animated.View style={[styles.container, animatedStyles]}>
                    <Video
                        ref={ref}
                        style={styles.video}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        onLoadStart={onLoadStart}
                        onLoad={onLoad}
                        onError={onError}
                    />

                    {isLoading && <ActivityIndicator style={styles.loading} />}
                </Animated.View>
            </Pressable>
        )
    }
)
