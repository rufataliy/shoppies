import React from "react";
import Spinner from "react-bootstrap/Spinner";
interface Props {
  loading: boolean;
}

export const Loader: React.FC<Props> = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="loader">
        <Spinner animation="border" variant="success" />;
      </div>
    );
  } else {
    return <>{children}</>;
  }
};
