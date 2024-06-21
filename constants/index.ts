interface NavLink {
  href: string;
  key: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "about_us", label: "About Us" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "products", label: "Products" },
  { href: "/", key: "contact_us", label: "Contact Us" },
];
