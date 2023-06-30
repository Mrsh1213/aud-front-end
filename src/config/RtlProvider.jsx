import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
export default function RtlThemeProvider({ children }) {
    // Create rtl cache
    const cacheRtl = createCache({
        key: 'mui-rtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </CacheProvider>;
}