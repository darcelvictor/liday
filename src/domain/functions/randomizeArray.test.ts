import { beforeEach, describe, expect, it, test } from "vitest";
import randomizeArray from "./randomizeArray";
import { Collaborator } from "../../interfaces/collaborator.intefaces";

describe("randomizeArray", () => {
    beforeEach(async (context) => {
    });

    it("should randomize array", ({ Collaborator[]}) => {
        expect(randomizeArray(Collaborators)).not.toBe(Collaborators);
    });
});
