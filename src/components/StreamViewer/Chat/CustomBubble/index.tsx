import { Bubble, IMessage } from 'react-native-gifted-chat'
import { styles } from './styles'

export type CustomBubbleProps = Bubble<IMessage>['props']

export function CustomBubble(props: CustomBubbleProps) {
    return (
        <Bubble
            {...props}
            textStyle={{
                left: styles.text
            }}
            wrapperStyle={{
                left: styles.wrapperStyle
            }}
        />
    )
}
