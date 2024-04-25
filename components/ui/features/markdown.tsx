"use client";
//import "@/app/css/style.css";
import React, { useState, useEffect } from "react";
import MarkdownStatic, { fetchMdContent } from "./markdownStatic";

interface MarkdownProps {
  url: string;
}

export default function Markdown({ url }: MarkdownProps) {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const data = await fetchMdContent(url);
        //console.log("data", data);
        setMarkdownContent(data);
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchMarkdownContent();
  }, [url]);

  return <MarkdownStatic content={markdownContent} />;
}
