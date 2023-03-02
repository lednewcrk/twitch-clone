import { View } from 'react-native'
import { useEffect, useMemo } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import {
    MAX_TRANSLATE_Y,
    MIDDLE_SCRREN,
    MINIPLAYER_HEIGHT,
    MINIPLAYER_TRANSLATE_X_BOUND,
    MINIPLAYER_WIDTH,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    TRANSLATE_HEIGHT_BOUND
} from '../Constants'
import { VideoPlayer } from '../VideoPlayer'
import { styles } from './styles'
import { Chat } from '../Chat'
import { Stream } from '../Context'

export type AnimatedScreenProps = {
    isEnabled: boolean
    currentStream: Stream | null
    children?: React.ReactNode
    onClose?: () => void
}

export function AnimatedScreen({
    children,
    isEnabled,
    currentStream,
    onClose
}: AnimatedScreenProps) {
    const opacity = useSharedValue(0)
    const isMiniPlayer = useSharedValue(false)
    const fullScreenContext = useSharedValue({ y: 0 })
    const miniplayerContext = useSharedValue({ x: 0 })
    const translateY = useSharedValue(0)
    const translateX = useSharedValue(0)
    const miniplayerTranslateX = useSharedValue(0)
    const screenWidth = useSharedValue(SCREEN_WIDTH)
    const screenHeight = useSharedValue(SCREEN_HEIGHT)

    function restoreAllSharedValues() {
        'worklet'
        opacity.value = 0
        isMiniPlayer.value = false
        fullScreenContext.value = { y: 0 }
        miniplayerContext.value = { x: 0 }
        translateY.value = 0
        translateX.value = 0
        miniplayerTranslateX.value = 0
        screenWidth.value = SCREEN_WIDTH
        screenHeight.value = SCREEN_HEIGHT

        onClose && runOnJS(onClose)()
    }

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

    function closeMiniplayer() {
        'worklet'
        miniplayerTranslateX.value = withTiming(
            MINIPLAYER_WIDTH,
            undefined,
            restoreAllSharedValues
        )
    }

    function restoreMiniplayer() {
        'worklet'
        miniplayerTranslateX.value = withTiming(0)
    }

    const gesture = useMemo(
        () =>
            Gesture.Pan()
                .onStart(() => {
                    fullScreenContext.value = { y: translateY.value }
                    miniplayerContext.value = { x: miniplayerTranslateX.value }
                })
                .onUpdate(event => {
                    if (!isMiniPlayer.value) {
                        translateY.value = Math.abs(
                            event.translationY + fullScreenContext.value.y
                        )
                    } else {
                        miniplayerTranslateX.value =
                            event.translationX + miniplayerContext.value.x
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
                    } else {
                        if (
                            miniplayerTranslateX.value >=
                            MINIPLAYER_TRANSLATE_X_BOUND
                        ) {
                            closeMiniplayer()
                        } else {
                            restoreMiniplayer()
                        }
                    }
                }),
        []
    )

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
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

    const onChangeOpacity = (value: number) => {
        'worklet'
        opacity.value = withTiming(value)
    }

    useEffect(() => {
        if (isEnabled) onChangeOpacity(1)
        else onChangeOpacity(0)
    }, [isEnabled])

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.container}>
                <View style={styles.childrenContainer}>{children}</View>
                {isEnabled && (
                    <Animated.View
                        style={[styles.viewerContainer, animatedStyles]}
                    >
                        <VideoPlayer
                            isMiniPlayer={isMiniPlayer}
                            onPress={onPressVideoPlayer}
                            translateX={miniplayerTranslateX}
                        />
                        <Chat />
                    </Animated.View>
                )}
            </View>
        </GestureDetector>
    )
}
