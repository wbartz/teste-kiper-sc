import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const Breadcrumb = ({ history, location }) => {
  const [pages, setPages] = useState('');

  const getPath = (path) =>
    (path.slice(0, 1).toUpperCase() + path.slice(1)).replace('-', ' ');

  const getPages = useCallback((url) => {
    const routes = url.slice(1).split('/');
    const paths = [];

    if (routes.length >= 1) {
      paths.push({
        label: 'Dashboard',
        link: '/dashboard',
        active: routes.length === 1,
      });
    }

    if (routes.length >= 2) {
      paths.push({
        label: `${getPath(routes[0])} - ${getPath(routes[1])}`,
        link: `/${routes[0]}/${routes[1]}`,
        active: routes.length === 2,
      });
    }

    if (routes.length === 4) {
      paths.push({
        label: `${getPath(routes[2])} - ${getPath(routes[3])}`,
        link: `/${routes[3]}/${routes[2]}`,
        active: true,
      });
    }
    setPages(paths);
  }, []);

  useEffect(() => {
    getPages(location.pathname);
  }, [location, getPages]);

  return (
    <div>
      <div className="breadcrumb">
        {pages
          ? pages.map((page) => (
              <span key={page.label} className={page.active ? 'active' : ''}>
                {!page.active ? (
                  <i onClick={() => history.push(`${page.link}`)}>
                    {page.label}
                  </i>
                ) : (
                  page.label
                )}
              </span>
            ))
          : null}
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter(Breadcrumb);
