import Image from "next/image";
import PostDate from "@/components/utils/post-date";
import { UpdateMdx } from "@/components/mdx/update-mdx";

export default function PostItem({ ...props }) {
  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-500 before:ring-4 before:ring-brand-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5">
              {props.step}
              {/* {<PostDate dateString={props.step} />} */}
            </span>
          </time>
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.grey.400/.3),theme(colors.grey.400),theme(colors.grey.400/.3))1] group-last-of-type:border-none">
          <header>
            <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-grey-100/60 via-grey-100 to-grey-100/60 leading-8 pb-6">
              {props.title}
            </h2>
          </header>
          <figure className="bg-gradient-to-b to-grey-400/30 from-transparent rounded-3xl p-px mb-8">
            <Image
              className="w-full rounded-[inherit] w-[500px] h-[200px]"
              src={props.image}
              width={300}
              height={150}
              alt={props.title}
            />
          </figure>
          <UpdateMdx code={props.body.code} />
        </div>
      </div>
    </article>
  );
}
