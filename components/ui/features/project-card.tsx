import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface Item {
  id: number;
  icon: StaticImageData;
  slug: string;
  title: string;
  data: {
    description: string;
    value: string;
    link?: string;
  }[];
  description?: string;
  link?: string;
}

interface ItemProps {
  item: Item;
}

export default function ProjectCard({ item }: ItemProps) {
  const link = item.link ? item.link : item.slug;
  return (
    <div
      className="rounded-lg border  border-grey-500 hover:border-grey-400 bg-gradient-to-t from-grey-500 to-grey-600/30 transition-color ease-in-out p-4 sm:p-5 group"
      //href={""}
    >
      <div className="flex flex-col h-full">
        <div className="grow">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center justify-between space-x-2">
              <div className="h-10 w-10 flex items-center justify-center border border-brand-200 dark:border-brand-700 rounded-full mb-2">
                <Image src={item.icon} width={18} alt={item.title} />
              </div>
              <div className="block sm:hidden text-md font-aspekta font-[650] mb-1">
                {item.title}
              </div>
            </div>

            {item.description && (
              <div className="hidden sm:block font-bold text-md inline-flex items-center  text-center px-2 h-5">
                {item.description}
              </div>
            )}
          </div>
          <div className="hidden sm:block text-lg font-aspekta font-[650] mb-1">
            {item.title}
          </div>
          {item.description && (
            <div className="block sm:hidden text-md font-aspekta font-[650] mb-1">
              {item.description}
            </div>
          )}
          <div className="text-xs sm:text-sm text-grey-300">
            {item.data.map((data, index) => (
              <div
                key={index}
                className="block mb-2 sm:flex sm:justify-between sm:mb-0"
              >
                <div className="flex">
                  <svg
                    className="w-3 h-3 shrink-0 fill-current text-gray-400 mt-1 mr-3"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                  </svg>
                  <span className="mr-4">{data.description}</span>
                </div>
                {data.link ? (
                  <Link
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-500 hover:underline ml-6 sm:ml-0"
                  >
                    {data.value}
                  </Link>
                ) : (
                  <span className="font-semibold ml-6 sm:ml-0">
                    {data.value}
                  </span>
                )}
              </div>
            ))}
          </div>
          {/* <div className="flex">
            <svg
              className="w-3 h-3 shrink-0 fill-current text-gray-400 mt-1 mr-3"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
            </svg>
            <p className="text-sm text-brand-500 dark:text-brand-400 mb-2">
              {item.excerpt}
            </p>
          </div> */}
        </div>
        {item.link && (
          <div className="text-sky-500 flex justify-end">
            <svg
              className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
            >
              <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
