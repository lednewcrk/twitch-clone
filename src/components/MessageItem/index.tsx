import {
    Image,
    StyleProp,
    Text,
    TextStyle,
    View,
    ViewStyle
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { Message } from '../../types'
import { InlineImage } from '../InlineImage'
import { styles } from './styles'

export type MessageItemProps = {
    message: Message
    style?: StyleProp<ViewStyle>
    usernameStyle?: StyleProp<TextStyle>
    textStyle?: StyleProp<TextStyle>
}

export function MessageItem({
    message,
    style,
    usernameStyle,
    textStyle
}: MessageItemProps) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>
                {message.user.isSubscribed && (
                    <>
                        <InlineImage
                            source={{
                                uri: message.user.subscribeBadgeImageUrl
                            }}
                            style={styles.badgeIcon}
                            resizeMode={'cover'}
                        />
                        {'  '}
                    </>
                )}

                {message.user.isPrime && (
                    <>
                        <InlineImage
                            source={{
                                uri: 'https://www.digiseller.ru/preview/454228/p1_2351495_bf5cbaf2.png'
                            }}
                            style={styles.badgeIcon}
                            resizeMode={'cover'}
                        />
                        {'  '}
                    </>
                )}

                <Text
                    style={[
                        usernameStyle,
                        { color: message.user.usernameColorInHex }
                    ]}
                >{`${message.user.username}: `}</Text>
                <Text style={textStyle}>{message.text}</Text>
            </Text>
        </View>
    )
}
