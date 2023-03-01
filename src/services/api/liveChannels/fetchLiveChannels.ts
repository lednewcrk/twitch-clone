import { httpClient } from '../httpClient'

export const fetchLiveChannels = () =>
    httpClient.get('live_channels').then(response => response.data)
