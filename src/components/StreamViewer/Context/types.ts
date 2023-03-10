export type Stream = {
    id: number
    source: string
}

export type StreamViewerContextType = {
    isLiveStreaming: boolean
    currentLiveStream: Stream | null
    onStartStream: (stream: Stream) => void
    onCloseStream: () => void
}

export type StreamViewerProviderType = {
    children?: React.ReactNode
}
