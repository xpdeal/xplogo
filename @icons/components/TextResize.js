import Icon from '../Icon';

const TextResize = (props) => {
  return (
    <Icon {...props}>
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M5 7v10" />
      <path d="M7 5h10" />
      <path d="M7 19h10" />
      <path d="M19 7v10" />
      <path d="M10 10h4" />
      <path d="M12 14v-4" />
    </Icon>
  );
};

export default TextResize;
