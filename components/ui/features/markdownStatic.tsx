import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  return (
    <div>
      <ReactMarkdown
        children={content}
        components={{
          h1: ({ node, ...props }) => (
            <h1 {...props} className="text-6xl font-bold" data-aos="fade-up" />
          ),
          h2: ({ node, ...props }) => (
            <h2 {...props} className="text-4xl font-bold" data-aos="fade-up" />
          ),
          h3: ({ node, ...props }) => (
            <h3 {...props} className="text-3xl font-bold" data-aos="fade-up" />
          ),
          h4: ({ node, ...props }) => (
            <h4 {...props} className="text-2xl font-bold" data-aos="fade-up" />
          ),
          ul: ({ node, ...props }) => (
            <ul {...props} className="list-disc ml-8" data-aos="fade-up" />
          ),
          ol: ({ node, ...props }) => (
            <ol {...props} className="list-decimal ml-8" data-aos="fade-up" />
          ),
          p: ({ node, ...props }) => (
            <p {...props} className="text-grey-200" data-aos="fade-up" />
          ),
          img: ({ node, ...props }) => (
            <img
              {...props}
              className="w-full rounded-3xl"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          ),
        }}
      />
    </div>
  );
}

export async function fetchMdContent(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du contenu : " + url);
  }
  const data = await response.text();
  return data;
}
