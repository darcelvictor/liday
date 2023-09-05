import { beforeEach, describe, expect, it, test } from "vitest";
import randomizeArray from "./randomizeArray";
import { Collaborator } from "../../interfaces/collaborator.intefaces";

describe("randomizeArray", () => {
<<<<<<< HEAD
    beforeEach(async (context) => {
    });

    it("should randomize array", ({ Collaborator[]}) => {
        expect(randomizeArray(Collaborators)).not.toBe(Collaborators);
=======
    let items: Items[] = [
        {
            id: "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000",
            name: "Valentin",
            enabled: true,
        },
        {
            id: "76ef592b-bfb6-41af-9c88-69939a2be6f2",
            name: "Raphael",
            enabled: true,
        },
        {
            id: "74d81fe9-58c2-4ff0-9c6a-70bb1152e397",
            name: "Quentin",
            enabled: true,
        },
    ];
    beforeEach(() => {
    });
    describe("randomize array", () => {
        test("should randomize array", () => {
            expect(randomizeArray(items)).not.toBe(items);
        });
>>>>>>> origin/raph
    });
});
