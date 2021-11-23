export interface Props<Enum> {
    title: string;
    toggle: () => void;
    select: (item: Enum) => void;
    open: boolean;
    data: Enum[];
}