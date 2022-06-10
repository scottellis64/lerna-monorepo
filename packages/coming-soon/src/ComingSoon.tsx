import { Avatar, Box, Card, CardContent, CardHeader } from '@mui/material';
import { useAppMetrics } from '@sellis/hooks';
import { ReactNode } from 'react';

export interface ComingSoonProps {
  name: string;
  icon: ReactNode;
}

export const ComingSoon = (props: ComingSoonProps) => {
  const { contentFlex, contentPaddingLeft } = useAppMetrics();

  const { icon, name } = props;
  return (
    <Box flex={contentFlex} sx={{ paddingLeft: contentPaddingLeft }}>
      <Box sx={{
        width: {
          'xs': '200px',
          'sm': '200px',
          'md': '300px'
        },
        margin: 'auto',
        marginTop: '20px'
      }}>
        <Card>
          <CardContent>
            <CardHeader avatar={<Avatar>{icon}</Avatar>} title={`${name} coming soon`}/>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
