import React from 'react';
import { RichTextProps } from './RichText.types';
import { Grid, Typography } from '@mui/material';

export const RichText: React.FC<RichTextProps> = ({ content }) => {
  const processedContent = content.split('\n\n').map((paragraph, index) => {
    const trimmedParagraph = paragraph.trim();

    if (trimmedParagraph.includes('\n- ')) {
      const listItems = trimmedParagraph
        .split('\n')
        .filter((line) => line.startsWith('- '))
        .map((line, i) => <li key={i}>{line.replace(/^- /, '')}</li>);

      return <ul key={index}>{listItems}</ul>;
    }

    if (trimmedParagraph.startsWith('**') && trimmedParagraph.endsWith('**')) {
      const text = trimmedParagraph.replace(/^\*\*|\*\*$/g, '');
      return (
        <Typography key={index} variant='subtitle1' gutterBottom>
          {text}
        </Typography>
      );
    }

    if (
      trimmedParagraph.startsWith('###') &&
      trimmedParagraph.endsWith('###')
    ) {
      const text = paragraph.trim().replace(/^###\s*|\s*###$/g, '');
      return (
        <Typography key={index} variant='h3'>
          {text}
        </Typography>
      );
    }

    if (trimmedParagraph.startsWith('##') && trimmedParagraph.endsWith('##')) {
      const text = trimmedParagraph.replace(/^##\s*|\s*##$/g, '');
      return (
        <Typography key={index} variant='h5' gutterBottom>
          {text}
        </Typography>
      );
    }

    if (trimmedParagraph.startsWith('#') && trimmedParagraph.endsWith('#')) {
      const text = trimmedParagraph.replace(/^#\s*|\s*#$/g, '');
      return (
        <Typography key={index} variant='h6' gutterBottom>
          {text}
        </Typography>
      );
    }
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
