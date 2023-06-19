import { SectionContainer } from './Section.styled';

import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <SectionContainer>
    <h1>{title}</h1>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
