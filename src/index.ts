#! /usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Lexer } from './Lexer';
import { Parser } from './Parser';

(() => {
    const args = process.argv;

    args.splice(0, 2);

    if(args.length === 0) {
        console.log('\nUsage:\npl-js [file_name].pjs\n');
        console.log('Flags:\n--nocompile - run your code without compile\n');

        return;
    }

    try {
        const fileData = fs.readFileSync(path.join(process.cwd(), args[0])).toString();

        if(!args[0].endsWith('.pjs')) {
            console.log('ERROR: File must have a .pjs extension!');
            return;
        }

        console.log('INFO: Start compilation...');

        const lexer = new Lexer(fileData);
        const tokens = lexer.lex();

        const parser = new Parser(fileData, tokens);
        const data = parser.parse();

        if(args[1] === '--nocompile') {
            try {
                console.log(' ');
                eval(data);
            } catch(ex) {
                console.log(ex);
            }
        } else {
            fs.writeFileSync(path.join(process.cwd(), `${args[0].split('.')[0]}.js`), data);
            console.log('INFO: Done!');
        }

    } catch (ex) {
        console.log('ERROR: File not found!');
    }
})();
