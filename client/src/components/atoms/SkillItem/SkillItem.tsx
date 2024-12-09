import { Grid, LinearProgress, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { ComponentMainSkill } from '~/generated/graphql';

export const SkillItem: React.FC<ComponentMainSkill> = ({
  Name,
  percentage,
}) => {
  const { t } = useTranslation();
  return (
    <Grid container flexDirection='column'>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Typography>{Name}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            {t('about.skills.percentage', { percentage })}
          </Typography>
        </Grid>
      </Grid>
      <LinearProgress variant='determinate' value={percentage ?? 0} />
    </Grid>
  );
};
