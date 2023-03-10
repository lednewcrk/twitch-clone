import { useEffect, useRef } from 'react'
import { Video } from 'expo-av'
import { AnimatedScreen } from './AnimatedScreen'
import { useStreamViewer } from './Context/hooks/useStreamViewer'
import { StreamViewerProps } from './types'

export function StreamViewer({ children }: StreamViewerProps) {
    const { isLiveStreaming, currentLiveStream, onCloseStream } =
        useStreamViewer()

    const videoPlayerRef = useRef<Video | null>(null)

    useEffect(() => {
        if (currentLiveStream) {
            videoPlayerRef.current
                ?.loadAsync({
                    uri: currentLiveStream.source,
                    type: 'm3u8'
                })
                .then(() => {
                    videoPlayerRef.current?.playAsync()
                })
        } else {
            videoPlayerRef.current?.stopAsync()
        }
    }, [currentLiveStream])

    return (
        <AnimatedScreen
            currentLiveStream={currentLiveStream}
            isEnabled={isLiveStreaming}
            onClose={onCloseStream}
            videoPlayerRef={videoPlayerRef}
        >
            {children}
        </AnimatedScreen>
    )
}
