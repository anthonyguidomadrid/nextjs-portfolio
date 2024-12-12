import { LinearProgress, styled } from '@mui/material';

export const DeterminateProgressBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
