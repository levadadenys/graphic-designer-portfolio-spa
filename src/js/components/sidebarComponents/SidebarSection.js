import React from 'react';

import NavigationLink from './../NavigationLink';

class SidebarSection extends React.Component {
  static defaultProps = {
    section: {
      disabled: false,
      href: '#',
      title: 'Navigation'
    }
  };

  render () {
    return (
      <span className="sidebar-nav-item">
        <NavigationLink {...this.props.section} />
        </span>
    );
  }

}

export default SidebarSection;