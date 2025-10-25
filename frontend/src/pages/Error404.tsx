import { NavBar } from '@/components/NavBar';
import { NavBarButton } from '@/components/NavBarButton';
import { CenteredContainer } from '@/styles/common';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Error404() {
  return (
    <>
      <NavBar hideLinks={true} />
      <CenteredContainer>
        <h1>404</h1>
        <NavBarButton selected={true}>
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <ArrowLeft size={16} /> Go Back
          </Link>
        </NavBarButton>
      </CenteredContainer>
    </>
  );
}
