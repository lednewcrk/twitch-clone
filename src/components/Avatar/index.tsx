import { useMemo } from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { styles } from './styles'

export type AvatarProps = {
    source?: FastImageProps['source']
    size?: number
    borderRadius?: number
    style?: FastImageProps['style']
}

export function Avatar({
    source,
    size = 40,
    borderRadius,
    style
}: AvatarProps) {
    const avatarStyle = useMemo<FastImageProps['style']>(
        () => ({
            width: size,
            height: size,
            borderRadius: borderRadius ?? size / 2
        }),
        [size, borderRadius]
    )

    return (
        <FastImage
            source={source}
            style={[styles.avatar, avatarStyle, style]}
        />
    )
}
