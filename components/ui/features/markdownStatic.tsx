import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  return (
    <section>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={content}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              {...props}
              className="text-6xl font-bold mb-20"
              data-aos="fade-up"
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              {...props}
              className="text-2xl sm:text-4xl font-bold mb-5 sm:mb-10"
              data-aos="fade-up"
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              {...props}
              className="text-xl sm:text-2xl font-semibold text-brand-500 mt-5 sm:mt-10"
              data-aos="fade-up"
            />
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
            <p
              {...props}
              className="text-sm sm:text-lg text-grey-200 items-center my-5 leading-7"
              data-aos="fade-up"
            />
          ),
          img: ({ node, ...props }) => (
            <img
              {...props}
              className="rounded-3xl max-w-[auto] w-full sm:max-w-[500px] mx-0 sm:mx-4 items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          ),
          div: ({ node, ...props }) => (
            <div
              {...props}
              className="flex justify-center text-center my-8 sm:my-16"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          ),
          span: ({ node, ...props }) => (
            <span
              {...props}
              className="grid gap-2 grid-cols-1 xs:grid-cols-2 justify-center text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          ),
          strong: ({ node, ...props }) => (
            <strong {...props} className="text-brand-400" data-aos="fade-up" />
          ),
          code: ({ node, ...props }) => (
            <code
              {...props}
              className="text-orange-500 font-bold font-sans text-lg"
              data-aos="fade-up"
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              {...props}
              className=" italic text-grey-200 justify-center text-center mt-[-40px] mb-10"
              data-aos="fade-up"
            />
          ),
        }}
      />
    </section>
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
