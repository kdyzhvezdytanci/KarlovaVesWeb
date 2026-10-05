"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#ffffff]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {React.createElement(
          "a",
          {
            href: "/",
            onClick: closeMenu,
            className: "text-2xl font-semibold tracking-[-0.05em]",
          },
          "KARLOVKA"
        )}

        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] md:flex">
          {React.createElement(
            "a",
            {
              href: "/",
            },
            "Stories"
          )}

          {React.createElement(
            "a",
            {
              href: "/#about",
            },
            "About"
          )}

          {React.createElement(
            "a",
            {
              href: "mailto:hello@karlovka.example",
            },
            "Contact"
          )}
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
              {React.createElement(
                "a",
                {
                  href: "/",
                  onClick: closeMenu,
                },
                "Stories"
              )}

              {React.createElement(
                "a",
                {
                  href: "/#about",
                  onClick: closeMenu,
                },
                "About"
              )}

              {React.createElement(
                "a",
                {
                  href: "mailto:hello@karlovka.example",
                  onClick: closeMenu,
                },
                "Contact"
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
