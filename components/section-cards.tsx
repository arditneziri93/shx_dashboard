"use client";

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Area,
  AreaChart,
  XAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Radial Chart Config
const dealsChartData = [{ deals: 14, fill: "var(--color-deals)" }];

const dealsChartConfig = {
  deals: {
    label: "Deals",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

// Sparkline Config
const umsatzMonatlich = [
  { month: "Sep", umsatz: 8500 },
  { month: "Okt", umsatz: 12200 },
  { month: "Nov", umsatz: 18200 },
  { month: "Dez", umsatz: 24500 },
  { month: "Jan", umsatz: 117410 },
  { month: "Feb", umsatz: 16400 },
];

const sparklineConfig = {
  umsatz: {
    label: "Umsatz",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

// KPI Daten Reihe 2
const kpiData = [
  {
    title: "Neukunden-Deals",
    value: "11",
    trendPercent: "+37.5%",
    trendDirection: "up" as const,
    trendText: "Neukundengewinnung stark",
    description: "Abgeschlossene Neukunden-Deals",
  },
  {
    title: "Bestandskunden-Deals",
    value: "3",
    trendPercent: "-25%",
    trendDirection: "down" as const,
    trendText: "Rückgang zum Vorjahr",
    description: "Upselling-Potenzial prüfen",
  },
  {
    title: "AOV",
    value: "€9.558",
    trendPercent: "+5.2%",
    trendDirection: "up" as const,
    trendText: "Leichter Anstieg",
    description: "Durchschnittlicher Auftragswert",
  },
  {
    title: "Ø Zeit bis Close",
    value: "0 Tage",
    trendPercent: "+100%",
    trendDirection: "up" as const,
    trendText: "Sofortiger Abschluss",
    description: "Durchschnittliche Abschlussdauer Neukunden",
  },
];

function KpiCard({ item }: { item: (typeof kpiData)[number] }) {
  const isUp = item.trendDirection === "up";
  const TrendIcon = isUp ? IconTrendingUp : IconTrendingDown;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{item.title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {item.value}
        </CardTitle>
        <CardAction>
          <Badge
            variant="outline"
            className={isUp ? "text-green-500 border-green-500/30" : "text-red-500 border-red-500/30"}
          >
            <TrendIcon />
            {item.trendPercent}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {item.trendText} <TrendIcon className="size-4" />
        </div>
        <div className="text-muted-foreground">{item.description}</div>
      </CardFooter>
    </Card>
  );
}

function DealsCard() {
  return (
    <Card className="@container/card">
      <div className="flex items-center">
        {/* Linke Seite: KPI Infos */}
        <div className="flex-3">
          <CardHeader>
            <CardDescription>Deals Abgeschlossen</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              14
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-green-500 border-green-500/30">
                <IconTrendingUp />
                +16.7%
              </Badge>
            </CardAction>
          </CardHeader>
          <div className="h-6" />
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Anstieg zum Vormonat <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Im Vergleich zum letzten Zeitraum
            </div>
          </CardFooter>
        </div>

        {/* Rechte Seite: Radial Chart */}
        <div className="flex-2 pr-6 flex items-center justify-center">
          <ChartContainer
            config={dealsChartConfig}
            className="aspect-square w-[160px]"
          >
            <RadialBarChart
              data={dealsChartData}
              startAngle={90}
              endAngle={90 + (14 / 20) * 360}
              innerRadius={65}
              outerRadius={80}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[55, 70]}
              />
              <RadialBar dataKey="deals" background cornerRadius={5} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            14
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-md"
                          >
                            / 20
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </div>
      </div>
    </Card>
  );
}
function UmsatzCard() {
  return (
    <Card className="@container/card">
      <div className="flex items-center">
        {/* Linke Seite: KPI Infos */}
        <div className="flex-3">
          <CardHeader>
            <CardDescription>Umsatz</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              €133.810
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-green-500 border-green-500/30">
                <IconTrendingUp />
                +9.4%
              </Badge>
            </CardAction>
          </CardHeader>
          <div className="h-6" />
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Umsatz steigt kontinuierlich <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Gesamtumsatz dieses Jahr
            </div>
          </CardFooter>
        </div>

        {/* Rechte Seite: Sparkline */}
        <div className="flex-2 h-[160] aspect-square pr-8">
          <ChartContainer
            config={sparklineConfig}
            className="h-[100%] aspect-square w-full"
          >
            <AreaChart
              data={umsatzMonatlich}
              margin={{ top: 5, right: 5, bottom: 0, left: -25 }}
            >
              <defs>
                <linearGradient id="umsatzGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--color-umsatz)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-umsatz)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
              />
              <Area
                type="natural"
                dataKey="umsatz"
                stroke="var(--color-umsatz)"
                fill="url(#umsatzGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </Card>
  );
}

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6">
      {/* Filter — nur Desktop */}
      <div className="hidden items-center justify-between md:flex">
          <ToggleGroup type="single" defaultValue="year" variant="outline">
            <ToggleGroupItem value="year">Dieses Jahr</ToggleGroupItem>
            <ToggleGroupItem value="q1">Q1</ToggleGroupItem>
            <ToggleGroupItem value="q2">Q2</ToggleGroupItem>
            <ToggleGroupItem value="q3">Q3</ToggleGroupItem>
            <ToggleGroupItem value="q4">Q4</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="max">Max</ToggleGroupItem>
            <ToggleGroupItem value="semih">Semih</ToggleGroupItem>
            <ToggleGroupItem value="sam">Sam</ToggleGroupItem>
            <ToggleGroupItem value="yashar">Yashar</ToggleGroupItem>
          </ToggleGroup>
      </div>

      {/* Reihe 1: 2 große Karten */}
      <div className="grid grid-cols-1 gap-4 @3xl/main:grid-cols-2">
        <DealsCard />
        <UmsatzCard />
      </div>

      {/* Reihe 2: 4 kleine Karten */}
      <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {kpiData.map((item) => (
          <KpiCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
