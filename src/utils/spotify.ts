import type { SpotfiyCurrentPlayingTrack } from '@/types/spotfiy';

export const getSpotifyAccessToken = async (): Promise<{ access_token: string }> => {
  const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = import.meta.env.SPOTIFY_CLIENT_REFRESH_TOKEN;
  const basicToken = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicToken}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};

export const getSpotifyNowPlaying = async () => {
  try {
    const { access_token } = await getSpotifyAccessToken();

    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song');
    }

    if (response.status === 204) {
      throw new Error('Currently Not Playing');
    }

    const song = (await response.json()) as SpotfiyCurrentPlayingTrack;

    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist) => artist.name).join(', ');
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    return { albumImageUrl, artist, songUrl, title, artistUrl };
  } catch (error) {
    return undefined;
  }
};
