"use client";
import React from "react";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { TrendingUp } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { useGlobalContext } from "@/app/context/store";

const chartData = [
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
};

export default function Questions() {
    const { userQuest } = useGlobalContext();

    return (
        <Card className="flex flex-col border rounded-lg pb-4 mb-4 shadow-md w-full ml-4">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <div className="text-lg font-bold">
                        Question Analysis
                    </div>
                    <div>
                        <span className="text-blue-700">
                            {userQuest} / 15 
                        </span>
                    </div>
                </CardTitle>
                <CardDescription className="text-gray-700"> 
                    <div className="font-semibold ">
                        You scored {userQuest} questions correct out of 15
                    </div>
                    However, it still needs some improvements
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={250}
                        innerRadius={80}
                        outerRadius={110}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[86, 74]}
                        />
                        <RadialBar dataKey="visitors" background cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
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
                                                className="fill-foreground text-4xl font-bold"
                                            >
                                                {chartData[0].visitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                Visitors
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
