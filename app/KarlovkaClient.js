"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);

  const goHome = () => {
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f3f1eb]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={goHome}
          className="text-2xl font-semibold tracking-[-0.05em]"
        >
          KARLOVKA
        </button>

        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] md:flex">
          <button type="button" onClick={goHome}>
            Stories
          </button>

          #aboutAbout</a>

          <a href="mailto:hello@karlovka.example">
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/10 md:hidden"
          >
            <div className="flex flex-col gap-5 px-5 py-6 text-sm uppercase tracking-[0.16em]">
              <button
                type="button"
                className="text-left"
                onClick={goHome}
              >
                Stories
              </button>

              #about => setOpen(false)}
              >
                About
              </a>

              <a href="mailto:hello@karlovka.example">
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Landing({ articles }) {
  return (
    <main>
      <section className="mx-auto max-w-[1500px] px-5 pb-12 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="grid gap-8 border-b border-black/15 pb-14 lg:grid-cols-12 lg:items-end">
          <h1 className="max-w-5xl text-[clamp(3.4rem,8.5vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em] lg:col-span-9">
            Ideas for
            <br />
            considered living.
          </h1>

          <div className="lg:col-span-3">
            <p className="max-w-xs text-sm leading-6 text-black/60">
              An independent journal about the history, culture, nature, and
              people of Karlova Ves.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-black/45">
              Karlova Ves · Est. 2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mb-7 flex justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">
            Latest stories
          </h2>

          <span className="text-xs text-black/45">
            {articles.length} {articles.length === 1 ? "story" : "stories"}
          </span>
        </div>

        {articles.length === 0 ? (
          <div className="border-t border-black/15 py-16">
            <p className="text-sm text-black/55">
              No articles have been published yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((article, index) => {
              const articleNumber =
                article.number ||
                String(index + 1).padStart(2, "0");

              return (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.035,
                  }}
                >
                  {`/articles/${article.slug}`}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd9ce]">
                      {article.image ? (
                        {article.image}
                      ) : (
                        <div className="h-full w-full bg-[#ddd9ce]" />
                      )}

                      <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[#f3f1eb] opacity-0 transition group-hover:opacity-100">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-black/15 py-3 text-[10px] uppercase tracking-[0.16em] text-black/50">
                      <span>{article.category || article.folder}</span>
                      <span>{articleNumber}</span>
                    </div>

                    <h3 className="mt-4 text-[1.45rem] font-medium leading-[1.05] tracking-[-0.035em] transition-opacity group-hover:opacity-55">
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p className="mt-3 text-sm leading-6 text-black/55">
                        {article.excerpt}
                      </p>
                    )}
                  </Link>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>

      <section
        id="about"
        className="bg-[#1c1c18] text-[#f3f1eb]"
      >
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            About Karlovka
          </p>

          <div className="max-w-2xl">
            <p className="text-lg leading-7 text-white/90 sm:text-xl">
              Karlova Ves has been my home for over thirty years. It is where I
              spent my childhood, grew up, met my wife, and where we are now
              raising our children.
            </p>

            <p className="mt-5 text-base leading-7 text-white/70">
              Whether you are starting a new chapter of your life, spending your
              holidays here, or simply passing through, I hope this website
              helps you discover the spirit of Karlova Ves and feel a little
              more connected to the place around you.
            </p>

            <p className="mt-5 text-base leading-7 text-white/70">
              Through its history, culture, and natural beauty, Karlova Ves has
              many stories to tell. This website presents them in a simple and
              accessible way. Enjoy exploring and make yourself at home.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function KarlovkaClient({ articles = [] }) {
  return (
    <div className="min-h-screen bg-[#f3f1eb] text-[#171714] selection:bg-[#171714] selection:text-[#f3f1eb]">
      <Header />

      <Landing articles={articles} />

      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-5 py-8 text-xs uppercase tracking-[0.14em] text-black/45 sm:flex-row sm:justify-between lg:px-12">
          <span>© 2026 Karlovka</span>
          <span>Stories from Karlova Ves</span>
        </div>
      </footer>
    </div>
  );
}
