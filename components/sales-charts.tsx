"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

// ==================== DATEN ====================

const monatsumsatzData = [
  { month: "Jan", neukunden: 73000, bestandskunden: 44410 },
  { month: "Feb", neukunden: 12400, bestandskunden: 20080 },
  { month: "Mar", neukunden: 45000, bestandskunden: 28000 },
  { month: "Apr", neukunden: 38000, bestandskunden: 15000 },
  { month: "May", neukunden: 52000, bestandskunden: 31000 },
  { month: "Jun", neukunden: 29000, bestandskunden: 22000 },
  { month: "Jul", neukunden: 61000, bestandskunden: 18000 },
  { month: "Aug", neukunden: 34000, bestandskunden: 26000 },
  { month: "Sep", neukunden: 48000, bestandskunden: 35000 },
  { month: "Oct", neukunden: 56000, bestandskunden: 19000 },
  { month: "Nov", neukunden: 42000, bestandskunden: 38000 },
  { month: "Dec", neukunden: 67000, bestandskunden: 29000 },
];

const dealsAnzahlData = [
  { month: "Jan", neukunden: 9, bestandskunden: 2 },
  { month: "Feb", neukunden: 2, bestandskunden: 1 },
  { month: "Mar", neukunden: 6, bestandskunden: 3 },
  { month: "Apr", neukunden: 5, bestandskunden: 1 },
  { month: "May", neukunden: 7, bestandskunden: 2 },
  { month: "Jun", neukunden: 4, bestandskunden: 2 },
  { month: "Jul", neukunden: 8, bestandskunden: 1 },
  { month: "Aug", neukunden: 5, bestandskunden: 3 },
  { month: "Sep", neukunden: 6, bestandskunden: 4 },
  { month: "Oct", neukunden: 7, bestandskunden: 2 },
  { month: "Nov", neukunden: 5, bestandskunden: 3 },
  { month: "Dec", neukunden: 9, bestandskunden: 2 },
];

const neukundenUmsatzQuelleData = [
  {
    month: "Jan",
    coldCall: 25000,
    socialMedia: 18000,
    empfehlung: 12000,
    website: 18000,
  },
  {
    month: "Feb",
    coldCall: 4000,
    socialMedia: 3400,
    empfehlung: 2800,
    website: 2200,
  },
  {
    month: "Mar",
    coldCall: 13000,
    socialMedia: 12000,
    empfehlung: 10000,
    website: 10000,
  },
  {
    month: "Apr",
    coldCall: 13000,
    socialMedia: 9000,
    empfehlung: 8000,
    website: 8000,
  },
  {
    month: "May",
    coldCall: 14000,
    socialMedia: 15000,
    empfehlung: 12000,
    website: 11000,
  },
  {
    month: "Jun",
    coldCall: 11000,
    socialMedia: 7000,
    empfehlung: 5500,
    website: 5500,
  },
  {
    month: "Jul",
    coldCall: 19000,
    socialMedia: 16000,
    empfehlung: 14000,
    website: 12000,
  },
  {
    month: "Aug",
    coldCall: 12000,
    socialMedia: 8000,
    empfehlung: 7000,
    website: 7000,
  },
  {
    month: "Sep",
    coldCall: 15000,
    socialMedia: 13000,
    empfehlung: 11000,
    website: 9000,
  },
  {
    month: "Oct",
    coldCall: 16000,
    socialMedia: 15000,
    empfehlung: 14000,
    website: 11000,
  },
  {
    month: "Nov",
    coldCall: 14000,
    socialMedia: 11000,
    empfehlung: 9000,
    website: 8000,
  },
  {
    month: "Dec",
    coldCall: 19000,
    socialMedia: 18000,
    empfehlung: 16000,
    website: 14000,
  },
];

const neukundenAnzahlQuelleData = [
  { month: "Jan", coldCall: 3, socialMedia: 2, empfehlung: 2, website: 2 },
  { month: "Feb", coldCall: 1, socialMedia: 0, empfehlung: 1, website: 0 },
  { month: "Mar", coldCall: 2, socialMedia: 1, empfehlung: 1, website: 2 },
  { month: "Apr", coldCall: 2, socialMedia: 1, empfehlung: 1, website: 1 },
  { month: "May", coldCall: 2, socialMedia: 2, empfehlung: 2, website: 1 },
  { month: "Jun", coldCall: 1, socialMedia: 1, empfehlung: 1, website: 1 },
  { month: "Jul", coldCall: 3, socialMedia: 2, empfehlung: 2, website: 1 },
  { month: "Aug", coldCall: 2, socialMedia: 1, empfehlung: 1, website: 1 },
  { month: "Sep", coldCall: 2, socialMedia: 2, empfehlung: 1, website: 1 },
  { month: "Oct", coldCall: 2, socialMedia: 2, empfehlung: 2, website: 1 },
  { month: "Nov", coldCall: 2, socialMedia: 1, empfehlung: 1, website: 1 },
  { month: "Dec", coldCall: 3, socialMedia: 2, empfehlung: 2, website: 2 },
];

// ==================== CONFIGS ====================

// Chart 1: Monatsumsatz — Cyan
const monatsumsatzConfig = {
  neukunden: {
    label: "Neukunden",
    color: "#FF4A76",
  },
  bestandskunden: {
    label: "Bestandskunden",
    color: "#FF4A7688",
  },
} satisfies ChartConfig;

// Chart 2: Deals Anzahl — Blau
const dealsConfig = {
  neukunden: {
    label: "Neukunden",
    color: "#3b82f6",
  },
  bestandskunden: {
    label: "Bestandskunden",
    color: "#3b82f688",
  },
} satisfies ChartConfig;

// Chart 3: Neukundenumsatz nach Quelle — Grün
const quelleUmsatzConfig = {
  coldCall: {
    label: "Cold Call",
    color: "#34d399",
  },
  socialMedia: {
    label: "Social Media",
    color: "#34d399bb",
  },
  empfehlung: {
    label: "Empfehlung",
    color: "#34d39988",
  },
  website: {
    label: "Website / Inbound",
    color: "#34d39955",
  },
} satisfies ChartConfig;

// Chart 4: Anzahl Neukunden nach Quelle — Orange
const quelleAnzahlConfig = {
  coldCall: {
    label: "Cold Call",
    color: "#f97316",
  },
  socialMedia: {
    label: "Social Media",
    color: "#f97316bb",
  },
  empfehlung: {
    label: "Empfehlung",
    color: "#f9731688",
  },
  website: {
    label: "Website / Inbound",
    color: "#f9731655",
  },
} satisfies ChartConfig;

// ==================== CHARTS ====================

function MonatsumsatzChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monatsumsatz (Neu- vs. Bestandskunden)</CardTitle>
        <CardDescription>Umsatz in € pro Monat</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={monatsumsatzConfig}
          className="h-[300px] w-full"
        >
          <BarChart
            barSize={8}
            margin={{ left: -10 }}
            data={monatsumsatzData.slice(-6)}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              width={45}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="neukunden"
              stackId="a"
              fill="var(--color-neukunden)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="bestandskunden"
              stackId="a"
              fill="var(--color-bestandskunden)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function DealsAnzahlChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Anzahl gewonnener Deals (Neu- vs. Bestandskunden)</CardTitle>
        <CardDescription>Deals pro Monat</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={dealsConfig} className="h-[300px] w-full">
          <BarChart
            barSize={8}
            margin={{ left: -10 }}
            data={dealsAnzahlData.slice(-6)}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              width={30}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="neukunden"
              stackId="a"
              fill="var(--color-neukunden)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="bestandskunden"
              stackId="a"
              fill="var(--color-bestandskunden)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function NeukundenUmsatzQuelleChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Neukundenumsatz nach Quelle</CardTitle>
        <CardDescription>Umsatz in € pro Monat</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={quelleUmsatzConfig}
          className="h-[300px] w-full"
        >
          <BarChart
            barSize={8}
            margin={{ left: -10 }}
            data={neukundenUmsatzQuelleData.slice(-6)}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              width={45}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="coldCall"
              stackId="a"
              fill="var(--color-coldCall)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="socialMedia"
              stackId="a"
              fill="var(--color-socialMedia)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="empfehlung"
              stackId="a"
              fill="var(--color-empfehlung)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="website"
              stackId="a"
              fill="var(--color-website)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function NeukundenAnzahlQuelleChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Anzahl Neukunden nach Quelle</CardTitle>
        <CardDescription>Neukunden pro Monat</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={quelleAnzahlConfig}
          className="h-[300px] w-full"
        >
          <BarChart
            barSize={8}
            margin={{ left: -10 }}
            data={neukundenAnzahlQuelleData.slice(-6)}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              width={30}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="coldCall"
              stackId="a"
              fill="var(--color-coldCall)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="socialMedia"
              stackId="a"
              fill="var(--color-socialMedia)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="empfehlung"
              stackId="a"
              fill="var(--color-empfehlung)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="website"
              stackId="a"
              fill="var(--color-website)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// ==================== LAYOUT ====================

export function SalesCharts() {
  return (
    <div className="grid gap-4 px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-4 @3xl/main:grid-cols-2">
        <MonatsumsatzChart />
        <DealsAnzahlChart />
      </div>
      <div className="grid grid-cols-1 gap-4 @3xl/main:grid-cols-2">
        <NeukundenUmsatzQuelleChart />
        <NeukundenAnzahlQuelleChart />
      </div>
    </div>
  );
}
