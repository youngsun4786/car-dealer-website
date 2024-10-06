export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "Premium Used Cars | Your Trusted Dealer",
  description:
    "Find your perfect pre-owned vehicle at our trusted used car dealership. Wide selection, competitive prices, and excellent customer service.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Inventory",
      href: "/inventory",
    },
    {
      label: "Private Sales",
      href: "/private-sales",
    },
    {
      label: "Wish List",
      href: "/wish-list",
    },
    {
      label: "Past Sales",
      href: "/past-sales",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
