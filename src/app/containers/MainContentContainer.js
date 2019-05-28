import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { APP_ROUTE_CONSTANTS } from 'app/utils';
import { RouteWithSubRoutes } from 'app/components';
import { UI_SELECTORS } from 'app/stores/selectors';
import { AppStyles } from 'app/styles';

class MainContentContainer extends Component {  
  render() {
    const { MainContentWrapper } = AppStyles;
    const { isSidebarExpanded, isDialogOpened } = this.props;
    const isPreventScrolling = isSidebarExpanded || isDialogOpened;
    isPreventScrolling ? document.body.classList.add('prevent-scrolling') : document.body.classList.remove('prevent-scrolling');

    return (
      <Router>
        <MainContentWrapper isPreventScrolling={ isPreventScrolling }>
          {/* <MainHeaderContainer /> */}
          <Switch>
            { APP_ROUTE_CONSTANTS.ROUTES.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            )) }
          </Switch>
        </MainContentWrapper>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const isSidebarExpanded = UI_SELECTORS.getIsSidebarExpandedState(state);
  const isDialogOpened = UI_SELECTORS.getIsOpenDialogState(state);

  return {
    isSidebarExpanded,
    isDialogOpened
  };
};

export default connect(mapStateToProps)(MainContentContainer);