        /* 
        1.)
        Schreibe eine Funktion, die eine Zahl als Parameter akzeptiert 
        und zurückgiebt, ob sie gerade oder ungerade ist.
        */

        function checkEvenOdd(number) {
            if (number % 2 === 0) {
                return "even";
            } else {
                return "odd";
            }
        }

        /* 
        2.)
        Schreibe eine Funktion, die zwei Zahlen als Parameter akzeptiert
        und das größere der beiden zurückgibt.
        */

        function maxNumber(num1, num2) {
            if (num1 > num2) {
                return num1;
            } else {
                return num2;
            }
        }

        /* 
        3.)
        Schreibe eine Funktion, die eine Array von Zahlen als Parameter 
        akzeptiert und die Summe aller Zahlen im Array zurückgibt.
        */

        let numberArray = [1, 2, 3]
        function sumArray(numbers) {
            let sum = 0;

            for (let i = 0; i <= numbers.length; i++) {
                console.log("Schleifendurchlauf: " + i)
                sum = sum + numbers[i];
                console.log("Die aktuelle Summe ist: " + sum);
            }
            return sum;
        }

        /*        
        4.)
        Schreibe eine Funktion, die eine Zeichenkette als Parameter akzeptiert
        und die Anzahl der Vokale in die der Zeichenkette zurückgibt.
        "aeiou"
        */

        function countVowels(string) {
            let vowels = "aeiou";
            let count = 0;
            for (let i = 0; i < string.length; i++) {
                if (vowels.indexOf(string[i]) !== -1) {
                    count++;
                }
            }
            return count;
        }

        /*        
        5.) 
        Schreibe eine Funktion, die ein Array von Zahlen als Parameter 
        akzeptiert und das kleinste Element des Arrays zurückgibt. 
        */

        function minNumber(numbers) {
            let min = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] < min) {
                    min = numbers[i];
                }
            }
            return min;
        }

        /*
        6.)
        Schreibe eine Funktion, die einen Text als Parameter nimmt 
        und das am häufigsten vorkommende Wort im Text zurückgibt. 
        Wenn es mehrere Wörter gibt, die gleich häufig vorkommen, gib eines davon zurück.
        */
        // hallo mein name ist raphael ist ist ist raphael
        function mostCommonWord(text) {
            let words = text.split(" ");
            let wordCount = {};
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (word in wordCount) {
                    wordCount[word]++;
                } else {
                    wordCount[word] = 1;
                }
            }
            let mostCommon = null;
            let maxCount = 0;
            for (let word in wordCount) {
                if (wordCount[word] > maxCount) {
                    mostCommon = word;
                    maxCount = wordCount[word];
                }
            }
            return mostCommon;
        }


        // Beispiel While-Schleife
        function demonstrateWhile() {
            let x = 1;
            let y = 10;

            while(x < y) {
                console.log("While....")
                x = x + 1;
            }
        }

        demonstrateWhile();