
import React, {useState,useEffect} from "react";
import styles from "./css/PigLatin.module.css";


export default function PigLatin(){

    const [selectClass, setSelectClass] = useState('select-box-center');
    const [pClass, setPClass] = useState('none');
    const [outputText, setOutputText] = useState('');
    const [convertedText, setConvertedText] = useState('');
    const [inputText, setInputText] = useState('');
    const [selectValue, setSelectValue] = useState('select');
    

    function handleSelectClass(e){
        const select = e.target.value;
        

        setSelectClass(select === "select"
                        ? 'select-box-center'
                         : 'select-box');

        setConvertedText(select)
    }

    useEffect(() => {
        if(selectClass === 'select-box'){
            setPClass('p-element')
        }else if(selectClass === 'select-box-center'){
            setPClass('none')
        }
    }, [selectClass])

   

    function handleOutputChange(e){
        const value = e.target.value;
        setInputText(value);

        if(convertedText === 'pig-latin'){
            setOutputText(convertToPigLatin(e.target.value));
        }else {
            setOutputText(e.target.value);
        }
    }

    function convertToPigLatin(text) {
        const ignoreSpaces = /\s+/g;
        const textArray = text.trim().toLowerCase().split(ignoreSpaces);

        const pigLatinArray = textArray.map((word) => {
            if (word[0].match(/[aeiou]/i)) {
                return word + "yay";
            } else if (word[0].match(/[bcdfghjklmnpqrstvwxyz]/i)) {
                return word.slice(1) + word[0] + "ay";
            } else{
                return word;
            }

        })

        return pigLatinArray.join(" ")
        
    }

    return(


    <div className={styles.container}>
        <div className={`${styles['plain-text']} ${styles.box}`}>
            <h1>Plain Text</h1>
            <textarea onChange={handleOutputChange}
                className={styles['input-box']} 
                placeholder="Enter text here..."
                value={inputText}
                >
                
                </textarea><br></br>
                <button className={styles.clear} 
                onClick={() => {
                    setInputText('');
                    setOutputText('');
                    }}>
                    Clear
                    </button>
        </div>
        <div className={`${styles['modified-text']} ${styles.box}`}>
            <h1>Modified Text</h1>
            <select className={styles[selectClass]} onChange={handleSelectClass}>
                <option value="select" default>Select a conversion</option> 
                <option value="pig-latin">Pig Latin</option>
                <option value="leet-speak">Leet Speak</option>
                <option value="morse-code">Morse Code</option>
            </select>
            <p className={styles[pClass]}>{outputText}</p>
            
        </div>
    </div>
    )

}