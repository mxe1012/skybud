
export function optimizedCompass(degree: number): string {

    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const current = Math.round(degree / 45) % 8
    return directions[current];

}
