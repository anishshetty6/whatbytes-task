"use client";
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useGlobalContext } from '@/app/context/store';

function Test() {
    const { userRank, setUserRank, userPercentile, setUserPercentile, userQuest, setUserQuest } = useGlobalContext();

    const [rank, setRank] = useState(userRank);
    const [percentile, setPercentile] = useState(userPercentile);
    const [quest, setQuest] = useState(userQuest);

    const handleSave = () => {
        setUserRank(rank);
        setUserPercentile(percentile);
        setUserQuest(quest);
    };

    return (
        <div>
            <Card className="border rounded-lg  p-4 flex items-center space-x-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" className="h-12 w-12" />
                <div className="flex-grow">
                    <CardHeader className="p-0">
                        <CardTitle className="text-lg font-semibold">Hyper Text Markup Language</CardTitle>
                        <CardDescription className="text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</CardDescription>
                    </CardHeader>
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-blue-800 transition">Update</button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] p-6">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-bold">Update scores</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                                    <div className="flex-grow">
                                        <Label htmlFor="rank" className="text-lg font-medium">Update your <span className="font-bold">Rank</span></Label>
                                    </div>
                                    <Input id="rank" value={rank} onChange={(e) => setRank(e.target.value)} className="w-16 text-center border border-gray-300 rounded-md" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                                    <div className="flex-grow">
                                        <Label htmlFor="percentile" className="text-lg font-medium">Update your <span className="font-bold">Percentile</span></Label>
                                    </div>
                                    <Input id="percentile" value={percentile} onChange={(e) => setPercentile(e.target.value)} className="w-16 text-center border border-gray-300 rounded-md" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                                    <div className="flex-grow">
                                        <Label htmlFor="score" className="text-lg font-medium">Update your <span className="font-bold">Current Score (out of 15)</span></Label>
                                    </div>
                                    <Input id="score" value={quest} onChange={(e) => setQuest(e.target.value)} className="w-16 text-center border border-gray-300 rounded-md" />
                                </div>
                            </div>
                            <DialogFooter className="mt-6 flex justify-end space-x-4">
                                <Button className="bg-gray-200 text-gray-700 hover:bg-gray-300">cancel</Button>
                                <Button onClick={handleSave} className="bg-blue-700 text-white hover:bg-blue-800">save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </Card>
        </div>
    )
}

export default Test
