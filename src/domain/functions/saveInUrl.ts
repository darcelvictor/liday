import { Collaborator } from '../../interfaces/collaborator.intefaces';
export function saveInUrl(array: Collaborator[]): void {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("items", array.map((value)=>value.name).join(","));
    window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${searchParams.toString()}`
    );
    console.log(searchParams);
}
