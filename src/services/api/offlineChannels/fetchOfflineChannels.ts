import { httpClient } from '../httpClient'

export const fetchOfflineChannels = () =>
    httpClient.get('offline_channels').then(response => response.data)
