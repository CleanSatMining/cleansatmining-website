import Hamburger from "./hamburger";

export default function MobileSideBar({
  params,
}: {
  params: {
    topic: string;
    slug: string;
  };
}) {
  const post = {
    topic: {
      name: params.topic,
    },
    title: params.slug,
  };

  /* Mobile hamburger + breadcrumbs */

  return (
    <div className="md:hidden flex items-center mb-8">
      <Hamburger />

      {/* Breadcrumbs */}
      <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
        <span className="text-slate-600 dark:text-slate-400">
          {post.topic.name}
        </span>
        <svg
          className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500"
          width="8"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
        </svg>
        <span className="text-slate-800 font-medium truncate dark:text-slate-200">
          {post.title}
        </span>
      </div>
    </div>
  );
}
