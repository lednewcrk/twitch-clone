import { useContext } from 'react'
import { StreamViewerContext } from '../Context'

export function useStreamViewer() {
    const { isLiveStreaming, currentLiveStream, onStartStream, onCloseStream } =
        useContext(StreamViewerContext)
    return { isLiveStreaming, currentLiveStream, onStartStream, onCloseStream }
}
