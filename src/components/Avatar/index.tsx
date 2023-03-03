import { useMemo } from 'react'

import { AnimatedFastImage, AnimatedFastImageProps } from '../AnimatedFastImage'
import { styles } from './styles'

export type AvatarProps = {
    source?: AnimatedFastImageProps['source']
    size?: number
    borderRadius?: number
    style?: AnimatedFastImageProps['style']
    fadeAnimationIsEnabled?: boolean
}

export function Avatar({
    source,
    size = 40,
    borderRadius,
    style,
    fadeAnimationIsEnabled = true
}: AvatarProps) {
    const avatarStyle = useMemo<AnimatedFastImageProps['style']>(
        () => ({
            width: size,
            height: size,
            borderRadius: borderRadius ?? size / 2
        }),
        [size, borderRadius]
    )

    return (
        <AnimatedFastImage
            source={source}
            style={[styles.avatar, avatarStyle, style]}
            fadeAnimationIsEnabled={fadeAnimationIsEnabled}
        />
    )
}
