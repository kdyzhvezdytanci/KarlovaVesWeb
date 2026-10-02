"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f3f1eb]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={closeMenu}
          classtems-center gap-8 text-xs font-medium uppercase tracking-[0.18em] md:flex">
          <Link hrefLink>
          <LinkutAbout</Link>
          <a href="mailto:hello@karlovka.example">Contact</a>
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
              <Link href        Stories
              </Link>

              /#about
                About
              </Link>

              <a href="mailto:hello@karlovka.example" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
