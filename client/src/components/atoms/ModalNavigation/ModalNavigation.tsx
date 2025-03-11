import { Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ModalNavigationProps } from './ModalNavigation.types';
import { NavButton } from './ModalNavigation.styles';

export const ModalNavigation: React.FC<ModalNavigationProps> = ({
  isFirst,
  isLast,
  onPrev,
  onNext,
}) => {
  return (
    <Box>
      <NavButton disabled={isFirst} onClick={onPrev}>
        <ChevronLeftIcon />
      </NavButton>
      <NavButton disabled={isLast} onClick={onNext}>
        <ChevronRightIcon />
      </NavButton>
    </Box>
  );
};
