import { useMemo } from 'react'
import { Image, ImageProps } from 'react-native'
import { styles } from './styles'

export type AvatarProps = {
    source?: ImageProps['source']
    size?: number
    borderRadius?: number
}

export function Avatar({ source, size = 40, borderRadius }: AvatarProps) {
    const style = useMemo<ImageProps['style']>(
        () => ({
            width: size,
            height: size,
            borderRadius: borderRadius ?? size / 2
        }),
        [size, borderRadius]
    )

    return <Image source={source} style={[styles.avatar, style]} />
}
