import { Button, Container } from './Feedback.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map(({ id, type }) => (
      <Button key={id} onClick={onLeaveFeedback}>
        {type}
      </Button>
    ))}
  </Container>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
