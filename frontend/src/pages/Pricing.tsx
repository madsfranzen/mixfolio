import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "../components/NavBar"
import { CenteredContainer } from "@/styles/common"

export function Pricing() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <NavBar />
                <CenteredContainer>
                    <h1>Pricing</h1>
                </CenteredContainer>
            </ThemeProvider>
        </>
    )
}
