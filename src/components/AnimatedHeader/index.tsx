import { StyleProp, View, Text, ViewStyle } from 'react-native'
import Animated, {
    interpolate,
    SharedValue,
    useAnimatedStyle
} from 'react-native-reanimated'
import { styles, ANIMATED_HEADER_HEIGHT } from './styles'

export type AnimatedHeaderProps = {
    title: string
    offsetY: SharedValue<number>
    height?: number
    style?: StyleProp<ViewStyle>
}

export function AnimatedHeader({
    title,
    offsetY,
    height = ANIMATED_HEADER_HEIGHT,
    style
}: AnimatedHeaderProps) {
    const animatedStyle = useAnimatedStyle(
        () => ({
            opacity: interpolate(offsetY.value, [0, height], [1, 0]),
            height: interpolate(offsetY.value, [0, height], [height, 0])
        }),
        [offsetY]
    )

    return (
        <View style={[styles.container, style]}>
            <Animated.View style={animatedStyle}>
                <Text adjustsFontSizeToFit style={styles.title}>
                    {title}
                </Text>
            </Animated.View>
        </View>
    )
}
