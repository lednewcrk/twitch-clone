export type Stream = {
    id: number
}

export type StreamViewerContextType = {
    isLiveStreaming: boolean
    currentStream: Stream | null
    onStartStream: (stream: Stream) => void
}

export type StreamViewerProviderType = {
    children?: React.ReactNode
}