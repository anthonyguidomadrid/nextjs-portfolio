import React from 'react';
import { RichTextProps } from './RichText.types';
import { Grid, Typography } from '@mui/material';

export const RichText: React.FC<RichTextProps> = ({ content }) => {
  const processedContent = content.split('\n\n').map((paragraph, index) => {
    if (
      paragraph.trim().startsWith('###') &&
      paragraph.trim().endsWith('###')
    ) {
      const text = paragraph.trim().replace(/^###\s*|\s*###$/g, '');
      return (
        <Typography key={index} variant='h4'>
          {text}
        </Typography>
      );
    }
    // Otherwise, treat it as a normal paragraph
    return (
      <Typography key={index} variant='body1'>
        {paragraph.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < paragraph.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </Typography>
    );
  });

  return (
    <Grid container flexDirection='column' spacing={2}>
      {processedContent.map((paragraph, index) => (
        <Grid item key={index}>
          {paragraph}
        </Grid>
      ))}
    </Grid>
  );
};
