import { Button } from "./ui/button";
import styled from "styled-components";

/* Wrap shadcn Button and apply custom styles */
const StyledButton = styled(Button)`
    color: red;
`;

interface NavBarButtonProps {
    children: React.ReactNode;
    selected?: boolean;
}

export function NavBarButton({ children, selected = false }: NavBarButtonProps) {
    return (
        <StyledButton asChild variant={selected ? "outline" : "ghost"}>
            {children}
        </StyledButton>
    );
}
