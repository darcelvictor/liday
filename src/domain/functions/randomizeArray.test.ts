import { beforeEach, describe, expect, test, it } from "vitest";
import randomizeArray from "./randomizeArray";
import { Collaborator } from "../../interfaces/collaborator.intefaces";

describe("randomizeArray", () => {
    interface LocalTestContext {
        collaborators: Collaborator[];
    }

    beforeEach<LocalTestContext>((context) => {
        context.collaborators = [
            {
                id: "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000",
                name: "Valentin",
                enabled: true,
            },
            {
                id: "13081df9-259c-4408-b6ee-fe6784baa836",
                name: "Pierre",
                enabled: true,
            },
            {
                id: "08b59a41-29a2-48e2-8883-2df814327c76",
                name: "Marin",
                enabled: true,
            },
        ];
    });

    it<LocalTestContext>("Should randomize an array", ({ collaborators }) => {
        const result = randomizeArray(collaborators);
        expect(result).not.toBe(collaborators);
        expect(result).toHaveLength(3);
    });

    it<LocalTestContext>("Should keep the same elements", ({
        collaborators,
    }) => {
        const result = randomizeArray(collaborators);
        expect(result).toEqual(expect.arrayContaining(collaborators));
    });
});
