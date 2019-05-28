import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { AccordionStyles } from 'app/styles';

function AccordionItem({
  isUseTranslation,
  title,
  titleKey,
  content,
  contentKey
}) {
  const [ active, setStatus ] = useState(false);
  
  return (
    <AccordionStyles.Item className={ active && 'active' }>
      <AccordionStyles.Title
        className={ active && 'active' }
        onClick={() => setStatus(!active) }>
        {
          isUseTranslation || !!titleKey
            ? (<Trans i18nKey={ titleKey }>
              { title }
            </Trans>
            ) : title
        }
        <i className="fas"><FontAwesomeIcon icon={faChevronRight} /></i>
      </AccordionStyles.Title>
      <AccordionStyles.Content
        className={ active && 'active' }>
        {
          isUseTranslation || !!contentKey
            ? (<Trans i18nKey={ contentKey }>
              { content }
            </Trans>
            ) : content
        }
      </AccordionStyles.Content>
    </AccordionStyles.Item>
  );
  
}

AccordionItem.propTypes = {
  isUseTranslation: PropTypes.bool,
  title: PropTypes.string,
  titleKey: PropTypes.string,
  content: PropTypes.string,
  contentKey: PropTypes.string
};

AccordionItem.defaultProps = {
  isUseTranslation: false
};

export default withTranslation()(AccordionItem);