import { useMemo } from 'react'
import { Image, ImageProps, ImageStyle, StyleProp } from 'react-native'
import { styles } from './styles'

export type AvatarProps = {
    source?: ImageProps['source']
    size?: number
    borderRadius?: number
    style?: StyleProp<ImageStyle>
}

export function Avatar({
    source,
    size = 40,
    borderRadius,
    style
}: AvatarProps) {
    const avatarStyle = useMemo<ImageProps['style']>(
        () => ({
            width: size,
            height: size,
            borderRadius: borderRadius ?? size / 2
        }),
        [size, borderRadius]
    )

    return <Image source={source} style={[styles.avatar, avatarStyle, style]} />
}
