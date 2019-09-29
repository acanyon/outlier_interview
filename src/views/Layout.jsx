import React from 'react';
import classnames from 'classnames';

const Layout = ({
                  pageName, menu, children
                }) => {
  return (
    <main className={classnames(pageName, 'layout')}>
      <nav>
        { menu }
      </nav>

      <section>
        { children }
      </section>
    </main>
  );
};

export default Layout;
