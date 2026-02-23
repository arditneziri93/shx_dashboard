"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/shx-logo-white.png"
    : "/shx-logo-black.png";

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-3">
            <a href="#">
              <Image
                src={logoSrc}
                alt="SHX Logo"
                width={4096}
                height={746}
                className="h-7 w-auto"
                priority
              />
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
