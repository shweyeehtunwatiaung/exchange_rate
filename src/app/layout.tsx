import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "flag-icons/css/flag-icons.min.css";
import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";
import Providers from "./providers";
import PageLayout from "@/components/layout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
