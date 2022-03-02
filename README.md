# PolishJS
Normal programming language, but keywords are **in Polish**.

## About
Simple JavaScript preprocessor written in TypeScript, containing **polish keywords**.

## Install
```bash
npm i -g pl-js
```
**OR** <br>
You can try this language on [sandbox](#)!

## How to use
Your file must have **.pjs** extension!

If you want to compile file into JavaScript, run:
```bash
pl-js [file_name].pjs
```

If you want to run code without compiling, run:
```bash
pl-js [file_name].pjs --nocompile
```

## Example
```
zmienna a = 'moja zmienna';
stala b = 'moja stala zmienna';

funkcja dodaj(a, b) {
    zwroc a + b;
}

stala wynik = dodaj(10, 2);

jezeli (wynik > 10) {
    wyswietl('wynik jest wiekszy od 10!');
} w_innym_przypadku {
    wyswietl('wynik nie jest wiekszy od 10!');
}

zmienna i = 0;

dopoki(prawda) {
    jezeli(i++ > 10) {
        zlam;
    }
    
    wyswietl('petla while!');
}

przelacz (5) {
    przypadek 1:
        wyswietl('1');
        zlam;
    domyslnie:
        wyswietl('?');
}
```

## Keywords table
| keyword | replace |
| :-: | :-: |
| stala | const |
| zmienna | let |
| prawda | true |
| falsz | false |
| funkcja | function |
| zwroc | return |
| jezeli | if |
| w_innym_przypadku | else |
| przelacz | switch |
| przypadek | case |
| domyslnie | default |
| zlam | break |
| kontynuuj | continue |
| petla | for |
| dopoki | while |
| rob | do |
| sprobuj | try |
| zlap | catch |
| ostatecznie | finally |
| zero | null |
| nieokreslony | undefined |
| klasa | class |
| usun | delete |
| nowy | new |
| ten | this |

## Functions table
| function | mean |
| :-: | :-: |
| wyswietl() | console.log() |

## License
MIT