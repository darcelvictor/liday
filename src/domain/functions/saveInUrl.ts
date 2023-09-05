export function saveInUrl<Items>(array: Items[]): void {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, "", url.toString());
}
