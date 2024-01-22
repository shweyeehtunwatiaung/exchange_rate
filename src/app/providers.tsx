"use client";
import { PropsWithChildren } from "react";
import { SWRConfig } from "swr";

import { fetcher } from "@/lib/fetcher";
import { Theme } from "@radix-ui/themes";
export default function Providers({ children }: PropsWithChildren) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Theme>{children}</Theme>
    </SWRConfig>
  );
}
