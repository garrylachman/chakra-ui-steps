import { HTMLChakraProps } from '@chakra-ui/system';
import { ComponentType, ReactNode } from 'react';
export interface StepProps extends HTMLChakraProps<'li'> {
    label?: string | ReactNode;
    description?: string;
    icon?: ComponentType<any>;
    state?: 'loading' | 'error';
    checkIcon?: ComponentType<any>;
    isCompletedStep?: boolean;
    isKeepError?: boolean;
}
export declare const Step: import("@chakra-ui/system").ComponentWithAs<"li", StepProps>;
