import { Grid, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SocialMediaIcons } from '~/components/atoms';
import { ContactInformationProps } from './ContactInformation.types';

export const ContactInformation: React.FC<ContactInformationProps> = ({ contact, socialMedia }) => (
  <Grid container flexDirection='column' spacing={2}>
    <Grid item>
      <Grid container gap={1}>
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <Link href={`mailto:${contact?.email}`}>
            <Typography>{contact?.email}</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container gap={1}>
        <Grid item>
          <PhoneIphoneIcon />
        </Grid>
        <Grid item>
          <Link href={`tel:${contact?.phone.replace(/ /g, '')}`}>
            <Typography>{contact?.phone}</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container gap={1}>
        <Grid item>
          <LocationOnIcon />
        </Grid>
        <Grid item>
          <Typography>{contact?.address}</Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      {socialMedia && <SocialMediaIcons socialMedia={socialMedia} />}
    </Grid>
  </Grid>
);
