import fs from 'fs';
import path from 'path';
import type { Token } from './types/types';
import { keywords } from './data/keywords';
import { replace } from './utils/utils';

export class Parser {
    private offset: number;

    constructor(private text: string, private readonly tokens: Token[]) {
        this.offset = 0;
    }

    public parse() {
        const compileData = fs.readFileSync(path.join(__dirname, '../', 'dist', 'utils', 'compile.js')).toString();

        this.tokens.forEach(({ type, value, startPos, endPos }) => {
            const keyword = keywords.find(({ keyword }) => keyword === value);

            if(type === 'KEYWORD' && keyword) {
                this.text = replace(this.text, startPos!, endPos!, keyword.replace, value!, this.offset);
                this.offset += value!.length - keyword.replace.length;
            }
        });

        this.text = `${compileData}\n${this.text}`;
        return this.text;
    }
}
