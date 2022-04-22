import React, {useState} from "react";
import {Form,} from 'react-bootstrap';


const MorseCalculator = () => {

    const [answer, setAnswer] = useState('');

    // Hashmap of morse values
    let morseHash = new Map();
    morseHash.set( ".-", "A");
    morseHash.set("-...", "B") ;
    morseHash.set("-.-.", "C");
    morseHash.set("----", "CH");
    morseHash.set("-..", "D");
    morseHash.set(".", "E") ;
    morseHash.set("..-.", "F"); 
    morseHash.set("--.", "G" );
    morseHash.set("....", "H");
    morseHash.set("..", "I");
    morseHash.set(".---", "J");
    morseHash.set("-.-", "K");
    morseHash.set(".-..", "L");
    morseHash.set("--", "M");
    morseHash.set("-.", "N");
    morseHash.set("---", "O");
    morseHash.set(".--.", "P");
    morseHash.set("--.-", "Q");
    morseHash.set(".-.", "R");
    morseHash.set("...", "S");
    morseHash.set("-", "T");
    morseHash.set("..-", "U");
    morseHash.set("...-", "V");
    morseHash.set(".--","W");
    morseHash.set("-..-", "X");
    morseHash.set("-.--", "Y");
    morseHash.set("--..", "Z");
    morseHash.set('', " ");

    //core, wil ltake answer and decipher it. 
    const StringDecoder = (answer) => {
        let arr = answer.split('/');
        let ans = "";
        for (let i = 0; i < answer.length - 1; i++) {
            if(morseHash.get(arr[i])) {
                ans += morseHash.get(arr[i]);
            }
        }
        return ans;
    }
    const Clear =(e) => {
        e.preventDefault();
        document.querySelector('form').reset();
        setAnswer("");
    }
    return ( 
        <div className="container">
            <h1>Morse Code Solver</h1>
            <div className="morseFormContainer">
                <Form className = "morseForm">
                    <h3 class = "formItem">Please input morse input as ".-/../.-.//../--.", line breaks are each letter, double line break is a new word.</h3>
                    <label class = "formItem">
                       Input:
                       <input type ="text" value = {answer} onChange={(e) => setAnswer(e.target.value)} name="name"/> 
                    </label>
                    <label class = "formItem">
                        <button onClick={Clear}>Clear</button>
                    </label>
                    <h4>Answer: {StringDecoder(answer)}</h4>
                </Form>
            </div>
        </div>
     );
}
 
export default MorseCalculator;