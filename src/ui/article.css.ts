import { style } from '@vanilla-extract/css';

import { baseHeadingStyle } from '../styles/common.css';
import { fontWeights, gridSize } from '../styles/constants';

export const titleStyle = style([
    baseHeadingStyle,
    {
        margin: `0 0 ${1.25 * gridSize}px 0`,
        fontWeight: fontWeights.bold,
    },
]);
