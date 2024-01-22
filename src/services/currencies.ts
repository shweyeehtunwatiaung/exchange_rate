import { fetcher } from "@/lib/fetcher";
import { routeFilter } from "@/utils";
import useSWR from "swr";

export const useGetCurrencies = () =>
  useSWR(`/currency_data/list`, (url) =>
    fetcher(url, {
      apikey: process.env.NEXT_PUBLIC_CURRENCY_ACCESS_KEY
    })
  );

export const useGetRates = () =>
  useSWR(
    `/rates?${routeFilter({
      key: process.env.NEXT_PUBLIC_CURRENCY_RATES_ACCESS_KEY
    })}`,
    (url) =>
      fetcher(url, {
        baseUrl: process.env.NEXT_PUBLIC_CURRENCY_RATES_API
      })
  );
