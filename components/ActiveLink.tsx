"use client"

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <Link href={href}>
      <div className={pathname ? "active" : ""}>{children}</div>
    </Link>
  );
};

export default ActiveLink;
