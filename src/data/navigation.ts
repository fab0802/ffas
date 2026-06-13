import type { NavItem } from "@/types/navItem";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/", visibleInNav: true, visibleInFooter: false },
  { label: "FFAS", href: "/ffas", visibleInNav: true, visibleInFooter: true },
  { label: "Teams", href: "/teams", visibleInNav: true, visibleInFooter: true },
  {
    label: "Spielplan",
    href: "/spielplan",
    visibleInNav: true,
    visibleInFooter: true,
  },
  {
    label: "Events",
    href: "/events",
    visibleInNav: true,
    visibleInFooter: true,
  },
  { label: "News", href: "/news", visibleInNav: true, visibleInFooter: true },
  {
    label: "Kontakt",
    href: "/kontakt",
    visibleInNav: true,
    visibleInFooter: false,
  },
];
