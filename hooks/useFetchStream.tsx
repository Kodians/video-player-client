import { URLPattern } from "next/server";
import { useQuery } from "react-query";

const fetchStream = async (videoId: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/videos/${videoId}?cacheId=${videoId}`
  );
  const newResponse = new Response(response.body);
  const blob = await newResponse.blob();
  const url = URL.createObjectURL(blob);
  return url;
};

export const useFetchStream = (videoId: string, properties: any) => {
  return useQuery(videoId, async () => fetchStream(videoId), properties);
};
