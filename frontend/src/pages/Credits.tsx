import { works } from '@/models/Work';
import { NavBar } from '../components/NavBar';
import { CenteredContainer } from '@/styles/common';

export function Credits() {
  return (
    <>
      <NavBar />
      <CenteredContainer>
        {/* Grid */}
        <div className=" absolute top-15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-15 max-w-450">
          {works.map((work) => (
            <div className="flex flex-col items-center w-full aspect-square overflow-hidden rounded-xs">
              <img
                src={work.artwork}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </CenteredContainer>
    </>
  );
}
