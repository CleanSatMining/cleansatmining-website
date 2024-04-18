"use client";
//import "@/app/css/style.css";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  url: string;
}

export default function Markdown({ url }: MarkdownProps) {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du contenu");
        }
        const data = await response.text();
        console.log("data", data);
        setMarkdownContent(data);
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchMarkdownContent();
  }, [url]);

  return (
    <div>
      <div>Chargement ...</div>
      <ReactMarkdown
        children={markdownContent}
        components={{
          h1: ({ node, ...props }) => (
            <h1 {...props} className="text-6xl font-bold" />
          ),
          h2: ({ node, ...props }) => (
            <h2 {...props} className="text-4xl font-bold" />
          ),
          h3: ({ node, ...props }) => (
            <h3 {...props} className="text-3xl font-bold" />
          ),
          h4: ({ node, ...props }) => (
            <h4 {...props} className="text-2xl font-bold" />
          ),
          ul: ({ node, ...props }) => (
            <ul {...props} className="list-disc ml-8" />
          ),
          ol: ({ node, ...props }) => (
            <ol {...props} className="list-decimal ml-8" />
          ),
          img: ({ node, ...props }) => (
            <img {...props} className="w-full rounded-3xl" />
          ),
        }}
      />
    </div>
  );
}
