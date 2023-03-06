import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-full lg:max-w-5xl">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
