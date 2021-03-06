import React from 'react';

import SidebarSection from './sidebarComponents/SidebarSection';

class LeftSidebar extends React.Component {
  static defaultProps = {
    sections: []
  };

  render () {
    const SECTIONS = this.props.sections.map(
      section => <SidebarSection key={section.title} section={section} />);
    return (
      <div className="col-md-1 hidden-xs hidden-sm">
        <div className="main-nav">
          {SECTIONS}
        </div>
      </div>
    );
  }
}

export default LeftSidebar;