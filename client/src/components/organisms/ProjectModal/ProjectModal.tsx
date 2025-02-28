import {
  Button,
  DialogActions,
  Fade,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ProjectModalProps } from './ProjectModal.types';
import { formatDate, getAllCategoryName } from '~/utils';
import { ModalNavigation, RichText } from '~/components/atoms';
import Link from 'next/link';
import { ImageCarousel } from '~/components/molecules';
import { useTranslation } from 'next-i18next';
import theme from '~/utils/theme';
import CloseIcon from '@mui/icons-material/Close';
import {
  MobileModalNavWrapper,
  StyledDialog,
  StyledDialogContent,
  StyledDialogContentText,
} from './ProjectModal.styles';
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
    <StyledDialog
      open={open}
      onClose={handleClose}
      maxWidth='lg'
      fullScreen={isMobile}
      fullWidth={isMobile}
      TransitionComponent={Fade}
      keepMounted
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          {isMobile && (
            <MobileModalNavWrapper container justifyContent='space-between'>
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
            </MobileModalNavWrapper>
          )}
          <ImageCarousel images={pictures.data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledDialogContent>
            {!isMobile && (
              <ModalNavigation
                isFirst={isFirst}
                isLast={isLast}
                onPrev={onPrev}
                onNext={onNext}
              />
            )}
            <Typography>{formatDate(date, locale)}</Typography>
            <Typography variant='h2'>{title}</Typography>
            <Typography variant='h3'>{subTitle}</Typography>
            <StyledDialogContentText>
              <RichText content={description} />
              <Typography variant='caption'>
                {t('project.modal.categories', {
                  categories: categories?.data
                    .map((category) => category.attributes?.Tag)
                    .filter(
                      (category) => category !== getAllCategoryName(locale)
                    )
                    .join(', '),
                })}
              </Typography>
            </StyledDialogContentText>
          </StyledDialogContent>
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
    </StyledDialog>
  );
};
