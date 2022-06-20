import { useEffect } from 'react';
import { Mail } from '@mui/icons-material';
import { Badge } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import {
  emailsSelector, fetchEmails,
} from '@sellis/application-state';

export const Email = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmails() as any);
  }, [dispatch]);

  const {isLoading, error, emails} = useSelector(emailsSelector);

  return (
    <Badge badgeContent={error ? '?' : isLoading ? '...' : emails?.length ? emails.length : ''} color="error">
      <Mail />
    </Badge>
  );
}
