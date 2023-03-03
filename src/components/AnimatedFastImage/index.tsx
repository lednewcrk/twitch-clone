import FastImage, { FastImageProps } from 'react-native-fast-image'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'

// @ts-ignore
const AnimatedFastImageComponent = Animated.createAnimatedComponent(FastImage)

export type AnimatedFastImageProps = FastImageProps

export function AnimatedFastImage({
    onLoadStart,
    onLoadEnd,
    onError,
    style,
    ...rest
}: FastImageProps) {
    const opacity = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }))

    function fadeIn() {
        'worklet'
        opacity.value = withTiming(1)
    }

    function fadeOut() {
        'worklet'
        opacity.value = withTiming(0)
    }

    function _onLoadStart() {
        fadeOut()
        onLoadStart && onLoadStart()
    }

    function _onLoadEnd() {
        fadeIn()
        onLoadEnd && onLoadEnd()
    }

    function _onError() {
        fadeIn()
        onError && onError()
    }

    return (
        <AnimatedFastImageComponent
            style={[style, animatedStyle]}
            onLoadStart={_onLoadStart}
            onLoadEnd={_onLoadEnd}
            onError={_onError}
            {...rest}
        />
    )
}
