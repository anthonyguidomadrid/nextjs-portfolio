import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ProjectModalProps } from './ProjectModal.types';
import { getAllCategoryName } from '~/utils';
import { ModalNavigation, RichText } from '~/components/atoms';
import Link from 'next/link';
import { ImageCarousel } from '~/components/molecules';
import { useTranslation } from 'next-i18next';
import theme from '~/utils/theme';
import CloseIcon from '@mui/icons-material/Close';
import { ModalNavWrapper } from './ProjectModal.styles';
import { useRouter } from 'next/router';

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
  const { locale } = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={isMobile}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      keepMounted
    >
      <ModalNavWrapper container justifyContent='space-between'>
        <Grid item>
          <ModalNavigation
            isFirst={isFirst}
            isLast={isLast}
            onPrev={onPrev}
            onNext={onNext}
          />
        </Grid>
        <Grid item>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Grid>
      </ModalNavWrapper>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <ImageCarousel images={pictures.data} />
        <Typography variant='h3'>{subTitle}</Typography>
        <DialogContentText>
          <RichText content={description} />
          <Typography variant='caption'>
            {t('project.modal.categories', {
              categories: categories?.data
                .map((category) => category.attributes?.Tag)
                .filter((category) => category !== getAllCategoryName(locale))
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
    </Dialog>
  );
};
