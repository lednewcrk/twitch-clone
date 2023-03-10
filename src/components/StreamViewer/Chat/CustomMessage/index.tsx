import { Message, IMessage } from 'react-native-gifted-chat'
import { styles } from './styles'

export type CustomMessageProps = Message<IMessage>['props']

export function CustomMessage(props: CustomMessageProps) {
    return <Message {...props} />
}
