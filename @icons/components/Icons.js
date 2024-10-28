import Icon from '../Icon';

const Icons = (props) => {
  return (
    <Icon {...props}>
      <circle cx="6.5" cy="6.5" r="3.5" />
      <path d="M2.5 21h8l-4 -7z" />
      <path d="M14 3l7 7" />
      <path d="M14 10l7 -7" />
      <path d="M14 14h7v7h-7z" />
    </Icon>
  );
};

export default Icons;
