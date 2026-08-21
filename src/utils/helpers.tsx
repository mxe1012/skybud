
export function optimizedCompass(degree: number): string {

    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const current = Math.round(degree / 45) % 8
    return directions[current];

}

export function fahrenheitToCelsius(far: number): number {
    return Math.round((far - 32) * 5 / 9);
}

export function milesPerHourtoMS(mph: number): number {
    return mph / 2.237;
}

export function backgroundImageLookup(id: number): string {
    
    let bg;

    switch(id){
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
            bg = "url(./src/assets/backgrounds/bg_thunder.png)";
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
            bg = "url(./src/assets/backgrounds/bg_rain.png)";
            break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            bg = "url(./src/assets/backgrounds/bg_rain.png)";
            break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            bg = "url(./src/assets/backgrounds/bg_thunder.png)"; // should be snow
            break;
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
            bg = "url(./src/assets/backgrounds/bg_thunder.png)"; // should be atmospheric 
            break;
        case 800:
            bg = "url(./src/assets/backgrounds/bg_sunny_clear.png)";
            break;
        case 801:
            bg = "url(./src/assets/backgrounds/bg_sunny_clouds.png)";
            break;
        case 802:
        case 803:
        case 804:
            bg = "url(./src/assets/backgrounds/bg_cloudy.png)";
            break;
        default:
            bg = "url(./src/assets/backgrounds/bg.jpg)";
            break;
    }
    return bg;
}
