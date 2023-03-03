export type Stream = {
    id: number
    source: string
}

export type StreamViewerContextType = {
    isLiveStreaming: boolean
    currentStream: Stream | null
    onStartStream: (stream: Stream) => void
    onCloseStream: () => void
}

export type StreamViewerProviderType = {
    children?: React.ReactNode
}
