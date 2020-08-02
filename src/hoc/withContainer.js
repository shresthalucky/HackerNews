import React from 'react';

function withContainer(Component) {

  function containerComponent(props) {

    return (
      <div className="main-wrapper">
        <header>
          <div className="container">
            HackerNews
          </div>
        </header>
        <div className="container">
          <Component {...props} />
        </div>
        <footer>
          <div className="container">
            HackerNews
          </div>
        </footer>
      </div>
    );
  }

  return containerComponent;
}

export default withContainer;