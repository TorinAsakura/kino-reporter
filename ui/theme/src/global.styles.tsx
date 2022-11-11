import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

import { theme }  from './index'

export const GlobalStyles = () => (
  <Global
    styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700');
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@300;400;500;600;700');
        html {
          height: 100%;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -webkit-overflow-scrolling: touch;
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        #__next {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          background-color: ${theme.colors.background.white};
        }
      `}
  />
)
