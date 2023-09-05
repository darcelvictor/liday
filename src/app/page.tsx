"use client";
import { useState } from "react";
import randomizeArray from "@/domain/functions/randomizeArray";
import { Button } from "@/components/ui/button";
import { Collaborator } from "@/interfaces/collaborator.intefaces";
import { equipe } from "@/data/team";

export default function Home() {
    const initArray: Collaborator[] = equipe;
    const [array, setArray] = useState(initArray);

    function handleClick() {
        const tempArray = randomizeArray([...array]);
        setArray(tempArray);
    }

    return (
        <main className="flex flex-col p-4 justify-center h-100">
            clean app super
            <ul>
                {array.map((e) => {
                    return <li key={e.id}>{e.name}</li>;
                })}
            </ul>
            <Button onClick={handleClick}>Shuffle</Button>
        </main>
    );
}
