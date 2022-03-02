export type TokenType = 'KEYWORD' | 'IDENTIFIER' | 'STRING' | 'COMMENT';

export type Token = Readonly<{
    type: TokenType;
    value?: string;
    startPos?: number;
    endPos?: number;
}>;

export type Keyword = Readonly<{
    keyword: string;
    replace: string;
}>;
