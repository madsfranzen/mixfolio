import { ModeToggle } from "./mode-toggle";
import { NavBarButton } from "./NavBarButton";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8rem;
`;

const ToggleWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

interface props {
    hideLinks?: boolean;
}

export function NavBar({ hideLinks = false }: props) {
    const location = useLocation();
    const currentPath = location.pathname;

    const links = [
        { to: "/", label: "Home" },
        { to: "/credits", label: "Credits" },
        { to: "/pricing", label: "Pricing" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <NavBarContainer>
            <ButtonGroup style={{ visibility: hideLinks ? "hidden" : "visible" }}>
                {links.map(link => (
                    <NavBarButton key={link.to} selected={currentPath === link.to}>
                        <Link to={link.to}>{link.label}</Link>
                    </NavBarButton>
                ))}
            </ButtonGroup>
            <ToggleWrapper>
                <ModeToggle />
            </ToggleWrapper>
        </NavBarContainer>
    );
}

