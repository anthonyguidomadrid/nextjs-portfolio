import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

export const CustomButton = ({ labelText }: ButtonProps) => {
  return <StyledButton variant='contained'>{labelText}</StyledButton>;
};
