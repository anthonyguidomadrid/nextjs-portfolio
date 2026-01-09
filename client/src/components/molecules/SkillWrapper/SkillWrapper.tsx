import { Grid } from '@mui/material';
import { SkillWrapperProps } from './SkillWrapper.types';
import { SkillItem } from '~/components/atoms';

export const SkillWrapper: React.FC<SkillWrapperProps> = ({ skills }) => (
  <Grid container spacing={2} columnSpacing={5}>
    {skills?.map((skill, index) => {
      if (!skill) return null;
      return (
        <Grid key={index} size={{ xs: 12, lg: 6 }}>
          <SkillItem {...skill} />
        </Grid>
      );
    })}
  </Grid>
);
