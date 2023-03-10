import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import { faker } from '@faker-js/faker'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { Message } from '../../../types'
import { styles } from './styles'

import { MessageItem } from '../../MessageItem'
import { CustomBubble } from './CustomBubble'
import { CustomMessage } from './CustomMessage'

const CREATE_MESSAGE_INTERVAL_IN_MS = 2000

export type ChatProps = {}

const messageToIMessage = (message: Message): IMessage => ({
    _id: message.id,
    text: message.text,
    createdAt: message.createdAt,
    user: {
        _id: message.user.id,
        avatar: message.user.avatarUrl,
        name: message.user.username
    }
})

export function Chat({}: ChatProps) {
    const [messages, setMessages] = useState<Message[]>([
        generateRandomMessage(),
        generateRandomMessage(),
        generateRandomMessage()
    ])

    useEffect(() => {
        // const timer = setInterval(() => {
        //     setMessages(messages => [generateRandomMessage(), ...messages])
        // }, CREATE_MESSAGE_INTERVAL_IN_MS)
        // return () => {
        //     clearInterval(timer)
        // }
    }, [])

    const formatedMessages = useMemo<IMessage[]>(() => {
        return messages.map(messageToIMessage)
    }, [messages])

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={formatedMessages}
                // onSend={messages => onSend(messages)}
                renderBubble={CustomBubble}
                renderMessage={CustomMessage}
                renderDay={() => null}
                renderAvatar={() => null}
            />
        </View>
    )
}

function generateRandomMessage(): Message {
    const isSubscribed = faker.datatype.boolean()
    return {
        id: faker.datatype.uuid(),
        user: {
            id: faker.datatype.number(),
            username: faker.internet.userName(),
            isPrime: faker.datatype.boolean(),
            isSubscribed,
            usernameColorInHex: faker.color.rgb({
                format: 'hex',
                casing: 'lower'
            }),
            avatarUrl: faker.image.avatar(),
            subscribeBadgeImageUrl: isSubscribed
                ? faker.image.cats()
                : undefined
        },
        createdAt: new Date(),
        text: faker.hacker.phrase()
    }
}
