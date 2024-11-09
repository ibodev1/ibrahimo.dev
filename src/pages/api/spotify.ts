import { respond } from '@/utils/helpers';
import { getSpotifyNowPlaying } from '@/utils/spotify';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const song = await getSpotifyNowPlaying();
    return respond(200, true, 'Spotify Currently Playing Track', song);
  } catch (error: unknown) {
    return respond(500, false, (error as Error).message);
  }
};
