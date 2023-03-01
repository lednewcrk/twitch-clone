import { View } from 'react-native'
import { useMemo } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import {
    MAX_TRANSLATE_Y,
    MIDDLE_SCRREN,
    MINIPLAYER_HEIGHT,
    MINIPLAYER_WIDTH,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    TRANSLATE_HEIGHT_BOUND
} from '../Constants'
import { VideoPlayer } from '../VideoPlayer'

import { styles } from './styles'
import { Chat } from '../Chat'

export type AnimatedScreenProps = {
    children?: React.ReactNode
}

export function AnimatedScreen({ children }: AnimatedScreenProps) {
    const isMiniPlayer = useSharedValue(false)
    const context = useSharedValue({ y: 0 })
    const translateY = useSharedValue(0)
    const translateX = useSharedValue(0)
    const screenWidth = useSharedValue(SCREEN_WIDTH)
    const screenHeight = useSharedValue(SCREEN_HEIGHT)

    function translateToFullScreen() {
        'worklet'
        translateY.value = withTiming(
            interpolate(
                0,
                [0, SCREEN_HEIGHT],
                [0, MAX_TRANSLATE_Y],
                Extrapolate.CLAMP
            )
        )

        translateX.value = withTiming(0)
        screenWidth.value = withTiming(SCREEN_WIDTH)
        screenHeight.value = withTiming(SCREEN_HEIGHT)
        isMiniPlayer.value = false
    }

    function translateToMiniPlayer() {
        'worklet'
        translateY.value = withTiming(
            interpolate(
                SCREEN_HEIGHT,
                [0, SCREEN_HEIGHT],
                [0, MAX_TRANSLATE_Y],
                Extrapolate.CLAMP
            )
        )

        translateX.value = withTiming(SCREEN_WIDTH - MINIPLAYER_WIDTH - 16)
        screenWidth.value = withTiming(MINIPLAYER_WIDTH)
        screenHeight.value = withTiming(MINIPLAYER_HEIGHT)
        isMiniPlayer.value = true
    }

    const gesture = useMemo(
        () =>
            Gesture.Pan()
                .onStart(() => {
                    context.value = { y: translateY.value }
                })
                .onUpdate(event => {
                    if (!isMiniPlayer.value) {
                        translateY.value = Math.abs(
                            event.translationY + context.value.y
                        )
                    }
                })
                .onEnd(event => {
                    if (!isMiniPlayer.value) {
                        const absVelocity = Math.abs(event.velocityY)
                        if (
                            absVelocity > 100 &&
                            translateY.value >= TRANSLATE_HEIGHT_BOUND
                        ) {
                            const dragDown = event.velocityY >= 0
                            if (dragDown) {
                                translateToMiniPlayer()
                            } else {
                                translateToFullScreen()
                            }
                        } else if (translateY.value >= MIDDLE_SCRREN) {
                            translateToMiniPlayer()
                        } else {
                            translateToFullScreen()
                        }
                    }
                }),
        []
    )

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: screenWidth.value,
            height: screenHeight.value,
            transform: [
                { translateY: translateY.value },
                { translateX: translateX.value }
            ]
        }
    })

    const onPressVideoPlayer = () => {
        if (isMiniPlayer.value) {
            translateToFullScreen()
        }
    }

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.container}>
                <View style={styles.childrenContainer}>{children}</View>
                <Animated.View style={[styles.viewerContainer, animatedStyles]}>
                    <VideoPlayer
                        isMiniPlayer={isMiniPlayer}
                        onPress={onPressVideoPlayer}
                    />
                    <Chat />
                </Animated.View>
            </View>
        </GestureDetector>
    )
}
