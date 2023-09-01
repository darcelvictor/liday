import { Items } from "../../interfaces/items.intefaces";

export default function randomizeArray(array: Items[]) {
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
}
