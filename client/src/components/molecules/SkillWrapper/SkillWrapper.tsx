import { Grid } from '@mui/material';
import { SkillWrapperProps } from './SkillWrapper.types';
import { SkillItem } from '~/components/atoms';

export const SkillWrapper: React.FC<SkillWrapperProps> = ({ skills }) => {
  return (
    <Grid container spacing={2} columnSpacing={5}>
      {skills?.map((skill, index) => {
        if (!skill) return <></>;
        return (
          <Grid key={index} item xs={12} lg={6}>
            <SkillItem {...skill} />
          </Grid>
        );
      })}
    </Grid>
  );
};
