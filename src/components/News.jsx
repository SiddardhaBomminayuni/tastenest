import { newsPosts } from '../data/content'
import SectionTitle from './ui/SectionTitle'

export default function News() {
  return (
    <section id="news" className="pt-[90px] lg:pt-[100px]">
      <div className="container-main">
        <SectionTitle>Recent News</SectionTitle>

        <div className="mt-[40px] grid gap-[40px] lg:mt-[46px] lg:grid-cols-2 lg:gap-[30px]">
          {newsPosts.map((post) => (
            <article key={post.title} className="group flex items-center gap-[25px] sm:gap-[40px]">
              <a href="#" className="block w-[40%] max-w-[260px] shrink-0 overflow-hidden rounded-[30px] sm:w-[260px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[260/275.75] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div>
                <span className="inline-block rounded-[7px] bg-sun px-[10px] py-[2px] font-display text-[15px] leading-[25px] text-black">
                  {post.date}
                </span>
                <h3 className="mt-[14px] max-w-[250px] font-display text-[22px] leading-[28px] text-black sm:text-[30px] sm:leading-[36px]">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-[20px] flex items-center gap-[15px]">
                  <img src="/images/blog-author.png" alt={post.author} className="size-[55px] rounded-full object-cover" />
                  <span className="font-display text-[16px] leading-[19.2px] text-black">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
