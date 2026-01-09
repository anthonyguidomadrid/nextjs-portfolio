import { Grid, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SocialMediaIcons } from '~/components/atoms';
import { ContactInformationProps } from './ContactInformation.types';

export const ContactInformation: React.FC<ContactInformationProps> = ({ contact, socialMedia }) => (
  <Grid container flexDirection='column' spacing={2}>
    <Grid>
      <Grid container gap={1}>
        <Grid>
          <EmailIcon />
        </Grid>
        <Grid>
          <Link href={`mailto:${contact?.email}`}>
            <Typography>{contact?.email}</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
    <Grid>
      <Grid container gap={1}>
        <Grid>
          <PhoneIphoneIcon />
        </Grid>
        <Grid>
          <Link href={`tel:${contact?.phone.replace(/ /g, '')}`}>
            <Typography>{contact?.phone}</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
    <Grid>
      <Grid container gap={1}>
        <Grid>
          <LocationOnIcon />
        </Grid>
        <Grid>
          <Typography>{contact?.address}</Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid>
      {socialMedia && <SocialMediaIcons socialMedia={socialMedia} />}
    </Grid>
  </Grid>
);
