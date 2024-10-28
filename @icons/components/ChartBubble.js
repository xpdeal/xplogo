import Icon from '../Icon';

const ChartBubble = (props) => {
  return (
    <Icon {...props}>
      <circle cx="6" cy="16" r="3" />
      <circle cx="16" cy="19" r="2" />
      <circle cx="14.5" cy="7.5" r="4.5" />
    </Icon>
  );
};

export default ChartBubble;
