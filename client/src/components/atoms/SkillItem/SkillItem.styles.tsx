import { LinearProgress, styled, Typography } from '@mui/material';

export const DeterminateProgressBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const SkillName = styled(Typography)(() => ({
  textTransform: 'uppercase',
}));
