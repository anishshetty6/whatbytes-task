"use client";

import React from 'react';
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Sample chart data
const chartData = [
    { browser: "HTML Tools, Forms", completion: 80, fill: "var(--color-chrome)" },
    { browser: "HTML Tags, Refernce", completion: 60, fill: "var(--color-firefox)" },
    { browser: "HTML Tables, Refernce", completion: 24, fill: "var(--color-edge)" },
    { browser: "Tables & CSS Basics", completion: 96, fill: "var(--color-other)" },
];

// Chart 


export default function Component() {
    return (
        <div className='flex-grow mt-4'>
            <Card className="border rounded-lg pb-4 mb-4 shadow-md w-full ml-4">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">Syllabus Wise Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{
                                left: 25, 
                            }}
                        >
                            <YAxis
                                dataKey="browser"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                            <XAxis type="number" hide />
                            <Tooltip />
                            <Bar
                                dataKey="completion"
                                radius={20} 
                                barSize={15}
                            >
                                {chartData.map((entry, index) => (
                                    <Bar
                                        key={`bar-${index}`}
                                        dataKey="completion"
                                        fill={entry.fill}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
