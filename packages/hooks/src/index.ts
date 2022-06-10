import { useMediaQuery, useTheme } from '@mui/material';

export * from './Hooks';

export interface AppMetrics {
  createPostLeft: string;
  isXS: boolean;
  contentFlex: number;
  contentPaddingLeft: string;
  sidebarSmall: boolean;
  sidebarFlex: number;
  rightbarFlex: number;
  rightbarShown: boolean;
  photoColumns: number;
}

export const useAppMetrics = (): AppMetrics => {
  const theme = useTheme();

  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.between('lg', 'xl'));

  const isSmallOrLess = isXS || isSmall || isMedium;

  return {
    createPostLeft: isXS ? 'calc(50% - 25px)' : '30px',
    isXS,
    contentFlex: isSmallOrLess ? 10 : isMedium ? 5 : isLarge ? 6 : 5,
    contentPaddingLeft: isSmallOrLess ? '30px' : '0',
    sidebarSmall: isSmallOrLess,
    sidebarFlex: isSmallOrLess ? 0 : 1,
    rightbarShown: ! isSmall,
    rightbarFlex: isSmallOrLess ? 6 : isMedium ? 2 : isLarge ? 2 : 1,
    photoColumns: isSmallOrLess ? 1 : isMedium ? 2 : isLarge ? 3 : 4
  } as AppMetrics;
}

