import React from 'react';
import Auth from '../../utils/auth';

function Navtabs(props) {

  const tabs = ['Home', 'About', 'Map', 'Portfolio', 'Contact'];
  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
        {Auth.loggedIn() ? (
                <li className="nav-item" key={'AdminPage'}>
                  <a
                    href={'# AdminPage'}
                    onClick={() => props.handlePageChange('AdminPage')}
                    className={
                      props.currentPage === 'AdminPage' ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {'AdminPage'}
                  </a>
                </li>
              ) : (
                    <>  </>
                )}
      </ul>
    </div>
  );
}

export default Navtabs;
