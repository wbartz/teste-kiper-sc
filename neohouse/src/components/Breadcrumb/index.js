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
      const urls = routes[1].split('-');
      paths.push({
        label: `${getPath(routes[0])} - ${getPath(urls[0])} ${getPath(urls[1])}`,
        link: `/${routes[0]}/${routes[1]}`,
        active: routes.length === 2,
      });
    }

    if (routes.length >= 4) {
      const urls = routes[2].split('-');
      paths.push({
        label: `${getPath(routes[3])} - ${getPath(urls[0])} ${getPath(urls[1])}`,
        link: `/${routes[0]}/${routes[1]}/${routes[2]}/${routes[3]}`,
        active: routes.length === 4,
      });
    }

    if(routes.length === 3) {
      const urls = routes[2].split('-');
      paths.push({
        label: `${getPath(urls[0])} ${getPath(urls[1])}`,
        link: `/${routes[0]}/${routes[1]}/${routes[2]}`,
        active: routes.length === 3,
      });
    }
    if(routes.length === 5) {
      const urls = routes[4].split('-');
      paths.push({
        label: `${getPath(urls[0])} ${getPath(urls[1])}`,
        link: `/${routes[0]}/${routes[1]}/${routes[2]}/${routes[3]}/${routes[4]}`,
        active: routes.length === 5,
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
                  <i onClick={() => history.push(`${page.link}`, {...location.state})}>
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
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default withRouter(Breadcrumb);
