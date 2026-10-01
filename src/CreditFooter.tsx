import type { CreditFooterProps } from "./utils/types";

export default function CreditFooter({darkMode}: CreditFooterProps) {
    return (
        <>
            <footer>
                <div style={{display: "flex", justifyContent: "center", gap: '2px'}}>
                    <p style={{
                            textAlign: 'center',
                            color: darkMode ? 'whitesmoke' : 'black'
                        }}>
                        Built by Manny Estevez · {" "}
                        <a href="https://github.com/mxe1012" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </p>
                    <p style={{
                            textAlign: 'center',
                            color: darkMode ? 'whitesmoke' : 'black'
                        }}>
                        Weather data derived from {" "}
                        <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
                            OpenWeather
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}
