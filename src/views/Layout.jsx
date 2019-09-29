import React from 'react';
import classnames from 'classnames';
import Navigation from './Navigation';

const Layout = ({pageName, children}) => {
  return (
    <main className={classnames(pageName, 'layout')}>
      <nav>
        <Navigation />
      </nav>

      <section>
        { children }
      </section>
    </main>
  );
};

export default Layout;
