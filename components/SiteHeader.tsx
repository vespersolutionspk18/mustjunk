"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import {
  IconFacebook,
  IconInstagram,
  IconMenu,
  IconPen,
  IconClock,
  IconPhone,
} from "./Icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", modal: true },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
        setNavOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="utility-bar">
        <div className="wrap">
          <ul className="utility-left">
            <li className="hide-md">
              <span>Licensed and Insured</span>
              <span className="license-no">{site.license}</span>
            </li>
            <li className="hide-md">
              <span className="social-links">
                <a
                  href="https://www.facebook.com"
                  aria-label="Follow us on Facebook"
                >
                  <IconFacebook />
                </a>
                <a
                  href="https://www.instagram.com"
                  aria-label="Follow us on Instagram"
                >
                  <IconInstagram />
                </a>
              </span>
            </li>
          </ul>

          <ul className="utility-right">
            <li>
              <Link className="btn" href="/#schedule">
                <IconClock size={14} />
                Book Removal
              </Link>
            </li>
            <li>
              <Link className="btn" href="/#estimate">
                <IconPen size={14} />
                Free Estimate
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <header className={`site-header${stuck ? " is-stuck" : ""}`}>
        <div className="wrap">
          <div className="header-inner">
            <Link className="brand-logo" href="/" aria-label={`${site.name} home`}>
              <img src="/Assets/Logo.svg" alt={`${site.name}, ${site.tagline}`} />
            </Link>

            <button
              type="button"
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-controls="primary-nav"
              onClick={() => setNavOpen((v) => !v)}
            >
              <IconMenu />
              <span className="sr-only">{navOpen ? "Close menu" : "Open menu"}</span>
            </button>

            <nav
              id="primary-nav"
              className={`main-nav${navOpen ? " is-open" : ""}`}
              aria-label="Primary"
            >
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={
                        item.modal
                          ? pathname.startsWith("/services")
                            ? "page"
                            : undefined
                          : pathname === item.href
                            ? "page"
                            : undefined
                      }
                      onClick={(e) => {
                        if (item.modal) {
                          e.preventDefault();
                          setNavOpen(false);
                          setModalOpen(true);
                        } else {
                          setNavOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {modalOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="services-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="modal-panel">
            <button
              type="button"
              className="modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close services list"
            >
              &times;
            </button>
            <h2 id="services-modal-title">LA Junk Removal Services</h2>
            <p className="modal-sub">{site.tagline}</p>
            <ul className="service-list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={() => setModalOpen(false)}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link
                className="btn"
                href="/services"
                onClick={() => setModalOpen(false)}
              >
                View All Services
              </Link>
              <a
                className="btn btn-rust"
                href={site.phoneHref}
                onClick={() => setModalOpen(false)}
              >
                <IconPhone size={16} />
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
