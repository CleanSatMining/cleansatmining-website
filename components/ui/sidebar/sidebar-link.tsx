import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppProvider } from "@/app/app-provider";

interface SidebarLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarLink({ children, href }: SidebarLinkProps) {
  const pathname = usePathname();
  const { setSidebarOpen } = useAppProvider();

  return (
    <Link
      className={`flex items-center space-x-3 font-medium ${
        pathname === href ? "text-brand-500" : "text-grey-200"
      }`}
      href={href}
      onClick={() => setSidebarOpen(false)}
    >
      {children}
    </Link>
  );
}
