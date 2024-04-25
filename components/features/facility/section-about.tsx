"use client";
import React, { useMemo, useEffect } from "react";

import Image from "next/image";
import AboutImg from "@/public/images/facilities/csm-alpha[1].jpg";
import Markdown from "@/components/ui/features/markdown";

const FILE = "about.md";

interface SectionProps {
  slug: string;
}

export default function Section({ slug }: SectionProps) {
  const markdownComponent = useMemo(
    () => <Markdown url={"/api/facilities/" + slug + "/files/" + FILE} />,
    [slug]
  );

  return <section>{markdownComponent}</section>;
}
