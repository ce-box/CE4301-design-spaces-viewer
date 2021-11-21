export interface Props {
    title: string;
    message: string;
    toggle: () => void;
    open: boolean;
    extraButtonTitle?: string;
    extraButtonCallback?: () => void;
}