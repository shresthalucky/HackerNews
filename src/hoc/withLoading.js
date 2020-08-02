import React from 'react';

function withLoading(Component) {

  function LoadingComponent({ isLoading, ...props }) {

    if (!isLoading) {
      return (<Component {...props} />)
    }

    return (
      <div>
        Loading...
      </div>
    );
  }

  return LoadingComponent;
}

export default withLoading;