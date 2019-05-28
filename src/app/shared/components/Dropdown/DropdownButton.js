import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

import { DropdownButtonStyles } from 'app/styles';

function DropdownButton({
  title,
  items,
  selectedItem = items[0] || {},
  menuAligns,
  titleSize,
  selectedItemHandler
}) {
  const {
    Container,
    DropdownTitle,
    ButtonIcon,
    DropdownMenu,
    DropdownMenuItem
  } = DropdownButtonStyles;
  const [ isMenuVisible, toggleMenuVisiblity ] = useState(false);

  function onSelectItem(item) {
    if (selectedItemHandler) {
      selectedItemHandler(item);
    }

    toggleMenuVisiblity(false);
  }

  return (
    <Container>
      <DropdownTitle
        fontSize={ titleSize }
        onClick={ () => toggleMenuVisiblity(!isMenuVisible) }>
        { title ? title : selectedItem.label }
        <ButtonIcon
          icon={ faChevronDown }
          size="xs" />
      </DropdownTitle>
      { items && items.length > 0
        ? <DropdownMenu
          isVisible={ isMenuVisible }
          menuAligns={ menuAligns }>
          { items.map((item, index) => (
            <DropdownMenuItem
              key={ index }
              onClick={ onSelectItem.bind(this, item) }>
              { item.label }
            </DropdownMenuItem>
          )) }
        </DropdownMenu>
        : null
      }
    </Container>
  );
}

DropdownButton.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  selectedItem: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }),
  menuAligns: PropTypes.string, // 'left', 'right'
  titleSize: PropTypes.shape({
    mobile: PropTypes.number,
    laptop: PropTypes.number,
    desktop: PropTypes.number
  }),
  selectedItemHandler: PropTypes.func
};

DropdownButton.defaultProps = {
  title: '',
  items: [],
  menuAligns: 'left',
  titleSize: {
    mobile: 12,
    laptop: 16,
    desktop: 16
  }
};

export default DropdownButton;