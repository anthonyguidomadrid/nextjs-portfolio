import { ButtonProps } from './Button.props';
import { StyledButton } from './Button.styles';

export const CustomButton = ({ labelText }: ButtonProps) => {
  return <StyledButton variant='contained'>{labelText}</StyledButton>;
};
