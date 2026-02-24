"use client";

import {
  IconActivity,
  IconChartBar,
  IconLayoutDashboard,
  IconPresentation,
  type Icon,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems: { title: string; url: string; icon: Icon; isActive?: boolean }[] = [
  {
    title: "Gesamtübersicht",
    url: "#",
    icon: IconLayoutDashboard,
    isActive: true,
  },
  { title: "Activity Tracking", url: "#", icon: IconActivity },
  { title: "Sales KPI - Monatlich", url: "#", icon: IconChartBar },
  { title: "Vertriebs Overview", url: "#", icon: IconPresentation },
];

const salesKpiPersonen = [
  { name: "Max",    color: "bg-blue-500" },
  { name: "Semih",  color: "bg-emerald-500" },
  { name: "Sam",    color: "bg-violet-500" },
  { name: "Yashar", color: "bg-orange-500" },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>expectleads - Sales Reporting</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={item.isActive}>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      {/* Sales KPI per Person */}
      <SidebarGroupLabel className="mt-2">Sales KPI</SidebarGroupLabel>
      <SidebarMenu>
        {salesKpiPersonen.map(({ name, color }) => (
          <SidebarMenuItem key={name}>
            <SidebarMenuButton asChild>
              <a href="#">
                <Avatar className="size-5 rounded-sm">
                  <AvatarFallback className={`rounded-sm text-[10px] text-white ${color}`}>
                    {name[0]}
                  </AvatarFallback>
                </Avatar>
                <span>{name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
