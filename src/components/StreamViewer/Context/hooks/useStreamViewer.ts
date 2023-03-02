import { useContext } from 'react'
import { StreamViewerContext } from '../Context'

export function useStreamViewer() {
    const { isLiveStreaming, currentStream, onStartStream, onCloseStream } =
        useContext(StreamViewerContext)
    return { isLiveStreaming, currentStream, onStartStream, onCloseStream }
}
