import { HTMLChakraProps, ThemingProps } from '@chakra-ui/system';
import { ComponentType } from 'react';
export interface StepsProps extends HTMLChakraProps<'ol'>, ThemingProps {
    activeStep: number;
    orientation?: 'vertical' | 'horizontal';
    state?: 'loading' | 'error';
    responsive?: boolean;
    checkIcon?: ComponentType<any>;
    onClickStep?: (step: number) => void;
    labelOrientation?: 'vertical' | 'horizontal';
}
export declare const Steps: import("@chakra-ui/system").ComponentWithAs<"div", StepsProps>;
