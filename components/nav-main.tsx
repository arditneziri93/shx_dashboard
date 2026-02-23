"use client";

import {
  IconActivity,
  IconCellSignal5,
  IconChartBar,
  IconLayoutDashboard,
  IconPresentation,
  IconPresentationAnalytics,
  IconUser,
  type Icon,
} from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items: { title: string; url: string; icon: Icon; isActive?: boolean }[] =
  [
    {
      title: "Gesamtübersicht",
      url: "#",
      icon: IconLayoutDashboard,
      isActive: true,
    },
    { title: "Activity Tracking", url: "#", icon: IconActivity },
    { title: "Sales KPI - Monatlich", url: "#", icon: IconChartBar },
    { title: "Vertriebs Overview", url: "#", icon: IconPresentation },
    {
      title: "Vertriebs Overview Neu",
      url: "#",
      icon: IconPresentationAnalytics,
    },
    { title: "Sales KPI - Max", url: "#", icon: IconUser },
    { title: "Sales KPI - Semih", url: "#", icon: IconUser },
    { title: "Sales KPI - Sam", url: "#", icon: IconUser },
    { title: "Sales KPI - Yashar", url: "#", icon: IconUser },
  ];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem className="mb-2">
          <SidebarMenuButton>
            <IconCellSignal5 size={32} />
            <span className="text-lg">Close CRM Expectleads</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarGroupLabel>expectleads - Sales Reporting</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
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
    </SidebarGroup>
  );
}
