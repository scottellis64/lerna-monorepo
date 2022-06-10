// @ts-ignore
import { PaletteColor } from '@mui/material/styles';

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    customColor: PaletteColor;
  }
}
