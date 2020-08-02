import React from 'react';

function withLoading(Component) {

  function LoadingComponent({ isLoading, ...props }) {
    
    if (!isLoading) {
      return (
        <div>
          <Component {...props} />
        </div>
      )
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