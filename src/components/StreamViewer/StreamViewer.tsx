import { AnimatedScreen } from './AnimatedScreen'
import { useStreamViewer } from './Context/hooks/useStreamViewer'
import { StreamViewerProps } from './types'

export function StreamViewer({ children }: StreamViewerProps) {
    const { isLiveStreaming, currentStream, onCloseStream } = useStreamViewer()

    return (
        <AnimatedScreen
            isEnabled={isLiveStreaming}
            currentStream={currentStream}
            onClose={onCloseStream}
        >
            {children}
        </AnimatedScreen>
    )
}
