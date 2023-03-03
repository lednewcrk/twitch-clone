import { useEffect, useRef } from 'react'
import { Video } from 'expo-av'
import { AnimatedScreen } from './AnimatedScreen'
import { useStreamViewer } from './Context/hooks/useStreamViewer'
import { StreamViewerProps } from './types'

export function StreamViewer({ children }: StreamViewerProps) {
    const { isLiveStreaming, currentStream, onCloseStream } = useStreamViewer()

    const videoPlayerRef = useRef<Video | null>(null)

    useEffect(() => {
        if (currentStream) {
            console.log('START STREAMING =>', currentStream.source)
            videoPlayerRef.current
                ?.loadAsync({
                    uri: currentStream.source,
                    type: 'm3u8'
                })
                .then(() => {
                    videoPlayerRef.current?.playAsync()
                })
        } else {
            console.log('STOP STREAMING')
            videoPlayerRef.current?.stopAsync()
        }
    }, [currentStream])

    return (
        <AnimatedScreen
            isEnabled={isLiveStreaming}
            onClose={onCloseStream}
            videoPlayerRef={videoPlayerRef}
        >
            {children}
        </AnimatedScreen>
    )
}
