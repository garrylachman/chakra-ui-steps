import { PartsStyleFunction } from '@chakra-ui/theme-tools';
export declare const StepsStyleConfig: {
    parts: ("label" | "steps" | "icon" | "step" | "connector" | "stepIconContainer" | "iconLabel" | "description" | "labelContainer" | "stepContainer")[];
    baseStyle: PartsStyleFunction<Omit<import("@chakra-ui/theme-tools").Anatomy<"label" | "steps" | "icon" | "step" | "connector" | "stepIconContainer" | "iconLabel" | "description" | "labelContainer" | "stepContainer">, "parts">>;
    sizes: {
        sm: {
            stepIconContainer: {
                width: string;
                height: string;
                borderWidth: string;
            };
            icon: {
                width: string;
                height: string;
            };
            label: {
                fontWeight: string;
                textAlign: string;
                fontSize: string;
            };
            description: {
                fontWeight: string;
                textAlign: string;
                fontSize: string;
            };
        };
        md: {
            stepIconContainer: {
                width: string;
                height: string;
                borderWidth: string;
            };
            icon: {
                width: string;
                height: string;
            };
            label: {
                fontWeight: string;
                textAlign: string;
                fontSize: string;
            };
            description: {
                fontWeight: string;
                textAlign: string;
                fontSize: string;
            };
        };
        lg: {
            stepIconContainer: {
                width: string;
                height: string;
                borderWidth: string;
            };
            icon: {
                width: string;
                height: string;
            };
            label: {
                fontWeight: string;
                textAlign: string;
                fontSize: string;
            };
            description: {
                fontWeight: string;
                textAlign: string;
                fontSize: string;
            };
        };
    };
    defaultProps: {
        size: string;
        colorScheme: string;
    };
};