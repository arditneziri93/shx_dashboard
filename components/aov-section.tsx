"use client"

import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

// ==================== DATEN ====================

const aovNeukundenData = [
  { month: "Jul", aov: 7100 },
  { month: "Aug", aov: 6700 },
  { month: "Sep", aov: 7000 },
  { month: "Oct", aov: 7200 },
  { month: "Nov", aov: 7050 },
  { month: "Dec", aov: 7383 },
]

const aovBestandskundenData = [
  { month: "Jul", aov: 15000 },
  { month: "Aug", aov: 14200 },
  { month: "Sep", aov: 12800 },
  { month: "Oct", aov: 11500 },
  { month: "Nov", aov: 9800 },
  { month: "Dec", aov: 7700 },
]

// ==================== CONFIGS ====================

const aovNeukundenConfig = {
  aov: {
    label: "AOV Neukunden",
    color: "var(--primary)",
  },
} satisfies ChartConfig

const aovBestandskundenConfig = {
  aov: {
    label: "AOV Bestandskunden",
    color: "var(--primary)",
  },
} satisfies ChartConfig

// ==================== CHARTS ====================

function AovNeukundenSection() {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <Card>
        <CardHeader>
          <CardDescription>AOV Neukunden</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            €6.665
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>AOV Neukunden Monatsverlauf</CardTitle>
          <CardDescription>Durchschnittlicher Auftragswert in €</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={aovNeukundenConfig} className="h-[250px] w-full">
            <LineChart data={aovNeukundenData}>
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
                tickFormatter={(v) => `€${(v / 1000).toFixed(1)}k`}
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="aov"
                stroke="var(--color-aov)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

function AovBestandskundenSection() {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <Card>
        <CardHeader>
          <CardDescription>AOV Bestandskunden</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            €20.167
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>AOV Bestandskunden Monatsverlauf</CardTitle>
          <CardDescription>Durchschnittlicher Auftragswert in €</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={aovBestandskundenConfig} className="h-[250px] w-full">
            <LineChart data={aovBestandskundenData}>
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
              <Line
                type="monotone"
                dataKey="aov"
                stroke="var(--color-aov)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

// ==================== LAYOUT ====================

export function AovSection() {
  return (
    <div className="grid gap-4 px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-4 @3xl/main:grid-cols-2">
        <AovNeukundenSection />
        <AovBestandskundenSection />
      </div>
    </div>
  )
}
