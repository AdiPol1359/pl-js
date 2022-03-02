import type { Token } from './types/types';
import { keywords } from './data/keywords';

const stringPrefix = ['"', '`', "'"];

export class Lexer {
    private position: number;
    private currentChar?: string;

    constructor(private readonly text: string) {
        this.position = -1;
        this.advance();
    }

    public advance() {
        this.currentChar = ++this.position < this.text.length ? this.text[this.position] : undefined;
    }

    public lex() {
        const tokens: Token[] = [];

        while(this.currentChar !== undefined) {
            if(/^[a-zA-Z_]+$/.test(this.currentChar)) {
                tokens.push(this.makeIdentifier());
            } else if(stringPrefix.includes(this.currentChar)) {
                tokens.push(this.makeString());
            } else if(this.currentChar === '/') {
                const comment = this.makeComment();

                if(comment) {
                    tokens.push(comment);
                }
            } else {
                this.advance();
            }
        }

        return tokens;
    }

    public makeIdentifier() : Token {
        let identifier = '';

        while(this.currentChar !== undefined && /^[a-zA-Z_]+$/.test(this.currentChar)) {
            identifier += this.currentChar;
            this.advance();
        }

        return {
            type: keywords.find(({ keyword }) => keyword === identifier) ? 'KEYWORD' : 'IDENTIFIER',
            value: identifier,
            startPos: this.position - identifier.length,
            endPos: this.position - 1,
        };
    }

    public makeString() : Token {
        let value = '';

        this.advance();

        while(this.currentChar !== undefined && !stringPrefix.includes(this.currentChar)) {
            value += this.currentChar;
            this.advance();
        }

        this.advance();

        return { type: 'STRING', value };
    }

    public makeComment() : Token | null {
        let value = '';

        this.advance();

        switch(this.currentChar) {
            case '/':
                this.advance();

                // @ts-ignore
                while(this.currentChar !== undefined && this.currentChar !== '\n') {
                    value += this.currentChar;
                    this.advance();
                }
                break;
            case '*':
                this.advance();

                while(this.currentChar !== undefined && this.currentChar !== '*' && this.text[this.position + 1] !== '/') {
                    value += this.currentChar;
                    this.advance();
                }

                this.advance();
                break;
            default:
                return null;
        }

        return { type: 'COMMENT', value };
    }
}
