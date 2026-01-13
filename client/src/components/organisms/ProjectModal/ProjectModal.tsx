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
import { ModalNavigation } from '~/components/atoms';
import Link from 'next/link';
import { ImageCarousel } from '~/components/molecules';
import { useTranslation } from 'next-i18next';
import theme from '~/utils/theme';
import CloseIcon from '@mui/icons-material/Close';
import { ModalNavWrapper } from './ProjectModal.styles';
import { useRouter } from 'next/router';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  handleClose,
  project: {
    title,
    subTitle,
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
      maxWidth='lg'
      keepMounted
    >
      <ModalNavWrapper container justifyContent='space-between'>
        <Grid>
          <ModalNavigation
            isFirst={isFirst}
            isLast={isLast}
            onPrev={onPrev}
            onNext={onNext}
          />
        </Grid>
        <Grid>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Grid>
      </ModalNavWrapper>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid size={{ lg: 6, xs: 12 }}>
            <ImageCarousel images={pictures} />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography variant='h3'>{subTitle}</Typography>
            <DialogContentText>
              <BlocksRenderer content={description} />
              <Typography variant='caption'>
                {t('project.modal.categories', {
                  categories: categories
                    .map((category) => category?.tag)
                    .filter(
                      (category) => category !== getAllCategoryName(locale)
                    )
                    .join(', '),
                })}
              </Typography>
            </DialogContentText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Link href={codeUrl} target='_blank'>
          <Button>{t('project.modal.button.code')}</Button>
        </Link>
        {projectUrl && (
          <Link href={projectUrl} target='_blank'>
            <Button autoFocus>{t('project.modal.button.demo')}</Button>
          </Link>
        )}
      </DialogActions>
    </Dialog>
  );
};
