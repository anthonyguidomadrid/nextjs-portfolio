import { Box, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ModalNavigationProps } from './ModalNavigation.types';

export const ModalNavigation: React.FC<ModalNavigationProps> = ({
  isFirst,
  isLast,
  onPrev,
  onNext,
}) => {
  return (
    <Box>
      <Button disabled={isFirst} onClick={onPrev} style={{ minWidth: 0 }}>
        <ChevronLeftIcon />
      </Button>
      <Button disabled={isLast} onClick={onNext} style={{ minWidth: 0 }}>
        <ChevronRightIcon />
      </Button>
    </Box>
  );
};
