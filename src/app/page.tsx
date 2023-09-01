"use client";
import { useState } from "react";
import randomizeArray from "@/domain/functions/randomizeArray";
import { Button } from "@/components/ui/button";

export default function Home() {
    const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [array, setArray] = useState(initArray);

    function handleClick() {
        const tempArray = randomizeArray([...array]);
        setArray(tempArray);
    }

    return (
        <main className="flex flex-col p-4 justify-center h-100">
            clean app super
            <ul>
                {array.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
            <Button onClick={handleClick}>test</Button>
        </main>
    );
}
