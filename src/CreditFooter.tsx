import type { CreditFooterProps } from "./utils/types";

export default function CreditFooter({darkMode}: CreditFooterProps) {
    return (
        <>
            <footer>
                <p style={{
                        textAlign: 'center',
                        color: darkMode ? 'whitesmoke' : 'black'
                    }}>
                    Built by Manny Estevez · {" "}
                    <a href="https://github.com/mxe1012" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
            </footer>
        </>
    )
}
