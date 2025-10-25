import { NavBar } from '../components/NavBar';
import { CenteredContainer } from '../styles/common';

export function Home() {
  return (
    <>
      <NavBar />
      <CenteredContainer>
        <h1>Mixing Engineer</h1>
        <h1>Mads Franzen</h1>
      </CenteredContainer>
    </>
  );
}
