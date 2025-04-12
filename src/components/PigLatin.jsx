
import React, {useState,useEffect} from "react";
import styles from "./css/PigLatin.module.css";


export default function PigLatin(){

    const [selectClass, setSelectClass] = useState('select-box-center');
    const [pClass, setPClass] = useState('none');
    const [inputText, setInputText] = useState('');
    const [convertedText, setConvertedText] = useState('');
    

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


    function handleInputChange(e){
        if(convertedText === 'pig-latin'){
            setInputText(convertToPigLatin(e.target.value));
        }else {
            setInputText(e.target.value);
        }
    }

    function convertToPigLatin(text) {
        const ignoreSpaces = /\s+/g;
        const textArray = text.split(ignoreSpaces)

        const convertedText = 1;

        return convertedText

    }

    return(


    <div className={styles.container}>
        <div className={`${styles['plain-text']} ${styles.box}`}>
            <h1>Plain Text</h1>
            <textarea onChange={handleInputChange}
                className={styles['input-box']} 
                placeholder="Enter text here...">
                </textarea>
        </div>
        <div className={`${styles['modified-text']} ${styles.box}`}>
            <h1>Modified Text</h1>
            <select className={styles[selectClass]} onChange={handleSelectClass}>
                <option value="select" default>Select a conversion</option> 
                <option value="pig-latin">Pig Latin</option>
                <option value="leet-speak">Leet Speak</option>
                <option value="morse-code">Morse Code</option>
            </select>
            <p className={styles[pClass]}>{inputText}</p>
            
        </div>
    </div>
    )

}