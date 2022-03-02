import { Keyword } from '../types/types';

export const keywords: Keyword[] = [
    { keyword: 'stala', replace: 'const' },
    { keyword: 'zmienna', replace: 'let' },

    { keyword: 'prawda', replace: 'true' },
    { keyword: 'falsz', replace: 'false' },

    { keyword: 'funkcja', replace: 'function' },

    { keyword: 'zwroc', replace: 'return' },
    { keyword: 'zlam', replace: 'break' },
    { keyword: 'kontynuuj', replace: 'continue' },

    { keyword: 'jezeli', replace: 'if' },
    { keyword: 'w_innym_przypadku', replace: 'else' },

    { keyword: 'przelacz', replace: 'switch' },
    { keyword: 'przypadek', replace: 'case' },
    { keyword: 'domyslnie', replace: 'default' },
    { keyword: 'usun', replace: 'delete' },
    { keyword: 'zero', replace: 'null' },
    { keyword: 'nieokreslony', replace: 'undefined' },

    { keyword: 'petla', replace: 'for' },
    { keyword: 'dopoki', replace: 'while' },
    { keyword: 'rob', replace: 'do' },

    { keyword: 'sprobuj', replace: 'try' },
    { keyword: 'zlap', replace: 'catch' },
    { keyword: 'ostatecznie', replace: 'finally' },

    { keyword: 'klasa', replace: 'class' },
    { keyword: 'nowy', replace: 'new' },

    { keyword: 'ten', replace: 'this' },
];
