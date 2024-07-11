"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGlobalContext } from '@/app/context/store';

const validationSchema = Yup.object({
    rank: Yup.number()
        .required('Rank is required')
        .typeError('Rank must be a number'),
    percentile: Yup.number()
        .required('Percentile is required')
        .typeError('Percentile must be a number')
        .min(0, 'Percentile must be between 0 and 100')
        .max(100, 'Percentile must be between 0 and 100'),
    quest: Yup.number()
        .required('Correct Answers are required')
        .typeError('Correct Answers must be a number')
        .max(15, 'Correct Answers must be less than or equal to 15'),
});

function Test() {
    const { setUserRank, setUserPercentile, setUserQuest } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            rank: '',
            percentile: '',
            quest: '',
        },
        validationSchema,
        onSubmit: (values) => {
            setUserRank(values.rank);
            setUserPercentile(values.percentile);
            setUserQuest(values.quest);
            setIsOpen(false); 
        },
    });

    return (
        <div className='m-4 flex-grow w-full'>
            <Card className="border rounded-lg shadow-md p-4 flex items-center space-x-4 flex-col gap-5 md:flex-row lg:flex-row max-w-lg ">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" className="h-12 w-12" />
                <div className="flex-grow">
                    <CardHeader className="p-0">
                        <h1 className="text-lg font-semibold">Hyper Text Markup Language</h1>
                        <p className="text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                    </CardHeader>
                </div>
                <div>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <button className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-blue-800 transition">Update</button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] p-6">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-bold">Update scores</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
                                        <div className="flex-grow">
                                            <Label htmlFor="rank" className="text-lg font-medium">Update your <span className="font-bold">Rank</span></Label>
                                        </div>
                                        <Input
                                            id="rank"
                                            name="rank"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.rank}
                                            className="w-16 text-center border border-gray-300 rounded-md"
                                        />
                                    </div>
                                    {formik.touched.rank && formik.errors.rank ? (
                                        <div className="text-red-600 ml-48">{formik.errors.rank}</div>
                                    ) : null}
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
                                        <div className="flex-grow">
                                            <Label htmlFor="percentile" className="text-lg font-medium">Update your <span className="font-bold">Percentile</span></Label>
                                        </div>
                                        <Input
                                            id="percentile"
                                            name="percentile"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.percentile}
                                            className="w-16 text-center border border-gray-300 rounded-md"
                                        />
                                    </div>
                                    {formik.touched.percentile && formik.errors.percentile ? (
                                        <div className="text-red-600 ml-48">{formik.errors.percentile}</div>
                                    ) : null}
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
                                        <div className="flex-grow">
                                            <Label htmlFor="quest" className="text-lg font-medium">Update your <span className="font-bold">Current Score (out of 15)</span></Label>
                                        </div>
                                        <Input
                                            id="quest"
                                            name="quest"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.quest}
                                            className="w-16 text-center border border-gray-300 rounded-md"
                                        />
                                    </div>
                                    {formik.touched.quest && formik.errors.quest ? (
                                        <div className="text-red-600 ml-36">{formik.errors.quest}</div>
                                    ) : null}
                                </div>
                                <DialogFooter className="mt-6 flex justify-end space-x-4">
                                    <Button type="button" className="bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={() => setIsOpen(false)}>Cancel</Button>
                                    <Button type="submit" className="bg-blue-700 text-white hover:bg-blue-800">Save</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Card>
        </div>
    );
}

export default Test;
