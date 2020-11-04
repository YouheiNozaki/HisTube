/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export async function http<T>(
  request: RequestInfo,
  headers?: RequestInit,
): Promise<T> {
  const response = await fetch(request, headers);

  return response.json();
}

export const request = new Request(
  'https://education-video.microcms.io/api/v1/posts',
  {
    headers: {
      'X-API-KEY': `${process.env.X_API_KEY}`,
    },
  },
);
