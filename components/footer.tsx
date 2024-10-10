import { Link } from "@nextui-org/link";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-8">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href=""
        title="nextui.org homepage"
      >
        <span className="text-default-600">Copyright © 2024 Ruiz Motors</span>
      </Link>
    </footer>
  );
};
