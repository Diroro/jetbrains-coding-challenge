export interface Page {
    id: string;
    title: string;
    url?: string;
    level: number;
    parentId?: string;
    pages?: string[];
    anchors?: string[];
}
