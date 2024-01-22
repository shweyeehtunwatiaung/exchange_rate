"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NextRouter } from "next/router";

import { cn } from "@/utils/cn";
import { Box, Container, Section } from "@radix-ui/themes";

import Header from "./Header";
import Footer from "./Footer";

interface Props extends PropsWithChildren {
  className?: string;
}

const PageLayout: React.FC<Props> = ({
  children,
  className,
  ...props
}: Props) => {
  const pathname = usePathname();

  return (
    <>
      <Section p="0">
        <Header {...props} />
        <Container className="maxMd:max-w-full maxMd:w-full">
          <Box className="h-screen maxMd:p-4 lg:py-6">{children}</Box>
        </Container>
        <Footer />
      </Section>
    </>
  );
};

export default PageLayout;
