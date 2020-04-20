import PropTypes from "prop-types";
import React, { useContext } from "react";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { AppContext } from "../StoreProvider";
import Alert from "../../components/Alert";
import Helmet from "react-helmet";

const RouterBackground = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navbar />

      <div className="container">{children}</div>

      <Loading />
      <Alert />
    </>
  );
};

RouterBackground.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

RouterBackground.defaultProps = {
  title: "NextHouse",
};

export default (props) => (
  <RouterBackground {...useContext(AppContext)} {...props} />
);
