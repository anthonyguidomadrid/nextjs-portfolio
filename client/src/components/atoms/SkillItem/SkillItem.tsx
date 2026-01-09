import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { ComponentMainSkill } from '~/generated/graphql';
import { DeterminateProgressBar, SkillName } from './SkillItem.styles';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const SkillItem: React.FC<ComponentMainSkill> = ({
  name,
  percentage = 0,
}) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage ?? 0);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView, percentage]);

  return (
    <Grid container flexDirection='column' ref={ref}>
      <Grid container justifyContent='space-between'>
        <Grid>
          <SkillName>{name}</SkillName>
        </Grid>
        <Grid>
          <Typography>
            {t('about.skills.percentage', { percentage })}
          </Typography>
        </Grid>
      </Grid>
      <DeterminateProgressBar variant='determinate' value={progress} />
    </Grid>
  );
};
