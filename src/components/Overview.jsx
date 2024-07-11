"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { useGlobalContext } from "@/app/context/store";

const data = [
    { name: "0", uv: 10,  },
    { name: "", uv: 150 },
    { name: "25", uv: 400 },
    { name: "", uv: 500 },
    { name: "50", uv: 800 },
    { name: "", uv: 1350 },
    { name: "75", uv: 1600 },
    { name: "", uv: 600 },
    { name: "100", uv: 100 },
];

export default function Overview() {
    const { userPercentile } = useGlobalContext();

    const xTickValues = [0, 25, 50, 75, 100];

    return (
        <div className="flex-grow">
        <Card className="border rounded-lg  pb-4 mb-4 shadow-md max-w-lg ml-4">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <div className="text-lg font-bold">
                    Comparison Graph
                    </div>
                    <div>
                    <span role="img" aria-label="graph emoji">
                        📈
                    </span>
                    </div>
                </CardTitle>
                <CardDescription className="text-gray-700">
                    <div className="font-semibold">
                    You scored {userPercentile} percentile
                    </div>
                    which is lower than the average percentile 72% of all engineers who took this test.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width={"100%"} height={250}>
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            padding={{ left: 30, right: 30 }}
                            tick={{ fontSize: 12 }}
                            tickValues={xTickValues}
                        />
                        <Tooltip />
                        <Legend />
                        {userPercentile && (
                            <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#82ca9d"
                                name={`Your Percentile: ${userPercentile}%`}
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        </div>
    );
}

