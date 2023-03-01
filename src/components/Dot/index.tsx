import { useMemo } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Colors } from '../../values/colors'

export type DotProps = {
    size?: number
    color?: string
    style?: StyleProp<ViewStyle>
}

export function Dot({ size = 10, color = Colors.red, style = {} }: DotProps) {
    const dotStyle = useMemo<StyleProp<ViewStyle>>(
        () => ({
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color
        }),
        [size, color, style]
    )

    return <View style={StyleSheet.flatten([dotStyle, style])} />
}
