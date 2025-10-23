import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "../components/NavBar"
import { CenteredContainer } from "@/styles/common"

export function Credits() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <NavBar />
                <CenteredContainer>
                    <h1>Credits</h1>
                </CenteredContainer>
            </ThemeProvider>
        </>
    )
}

