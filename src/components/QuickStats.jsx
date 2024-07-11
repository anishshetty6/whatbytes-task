"use client";
import React from 'react'
import {
    Card,
    CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useGlobalContext } from '@/app/context/store';

function QuickStats() {
    const { userRank, userPercentile, userQuest } = useGlobalContext();

    return (
        <div className='flex-grow'>
            <Card className="border rounded-lg pb-2 mb-4 shadow-md max-w-lg ml-4">
                <CardHeader className="pb-2">
                    <h1 className="text-lg font-bold">Quick Statistics</h1>
                </CardHeader>
                <div className='grid grid-cols-3 divide-x divide-gray-300'>
                    <div className="flex flex-col items-center space-y-1 px-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://cdn-0.emojis.wiki/emoji-pics/google/trophy-google.png" />
                            <AvatarFallback>{userRank || "N/A"}</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <p className="text-lg font-bold">{userRank || "N/A"}</p>
                            <p className="text-gray-500 text-sm">YOUR RANK</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-1 px-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://cdn-0.emojis.wiki/emoji-pics/google/spiral-notepad-google.png" />
                            <AvatarFallback>{userPercentile || "N/A"}%</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <p className="text-lg font-bold">{userPercentile || "N/A"}%</p>
                            <p className="text-gray-500 text-sm">PERCENTILE</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-1 px-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://cdn-0.emojis.wiki/emoji-pics/icons8/check-mark-icons8.png" />
                            <AvatarFallback>{userQuest || "N/A"}</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <p className="text-lg font-bold">{userQuest || "0"}/15</p>
                            <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default QuickStats;
