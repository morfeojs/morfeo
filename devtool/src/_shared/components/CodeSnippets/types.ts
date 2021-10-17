export type CodeTab = {
  code: string;
  label: string;
  language?: string;
};

export type SnippetMapCallback = (value: string) => CodeTab[];
