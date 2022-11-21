import { ReactNode } from 'react';
interface StepLabelProps {
    isCurrentStep?: boolean;
    opacity: number;
    label?: string | ReactNode;
    description?: string;
}
export declare const StepLabel: ({ isCurrentStep, opacity, label, description, }: StepLabelProps) => JSX.Element | null;
export {};
