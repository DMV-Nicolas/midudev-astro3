import { type APISpaceXResponse, type Doc } from "../types/api"

interface GetLatestLaunchesOptions {
  limit: number
}

export async function getLatestLaunches({ limit }: GetLatestLaunchesOptions) {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        limit: limit,
        sort: {
          date_unix: "asc",
        },
      },
    }),
  })

  return (await res.json()) as APISpaceXResponse
}

interface GetLaunchOptions {
  id: string
}

export async function getLaunch({ id }: GetLaunchOptions) {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
  if (!res.ok) {
    return null
  }

  const data = (await res.json()) as Doc

  return data
}
