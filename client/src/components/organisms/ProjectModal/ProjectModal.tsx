import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
} from '@mui/material';
import { ProjectModalProps } from './ProjectModal.types';
import { formatDate } from '~/utils';
import { RichText } from '~/components/atoms';
import Link from 'next/link';
import { ImageCarousel } from '~/components/molecules';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTranslation } from 'next-i18next';

export const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  handleClose,
  project: {
    title,
    subTitle,
    date,
    description,
    categories,
    codeUrl,
    pictures,
    projectUrl,
  },
  isLast,
  isFirst,
  onPrev,
  onNext,
}) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'black',
        },
      }}
      maxWidth='lg'
    >
      <Grid container>
        <Grid item xs={6}>
          <ImageCarousel images={pictures.data} />
        </Grid>
        <Grid item xs={6}>
          <DialogContent>
            <Button disabled={isFirst} onClick={onPrev}>
              <ChevronLeftIcon />
            </Button>
            <Button disabled={isLast} onClick={onNext}>
              <ChevronRightIcon />
            </Button>
            <Typography>{formatDate(date)}</Typography>
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='h6'>{subTitle}</Typography>
            <DialogContentText sx={{ color: 'white' }}>
              <RichText content={description} />
              <Typography variant='caption'>
                {t('project.modal.categories', {
                  categories: categories?.data
                    .map((category) => category.attributes?.Tag)
                    .join(', '),
                })}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link href={codeUrl} target='_blank'>
              <Button>{t('project.modal.button.code-url')}</Button>
            </Link>
            {projectUrl && (
              <Link href={projectUrl} target='_blank'>
                <Button autoFocus>{t('project.modal.button.demo-url')}</Button>
              </Link>
            )}
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
};
