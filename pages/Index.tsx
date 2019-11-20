import * as React from "react";
import {ChangeEvent, useState} from "react";
import CreateOrannyaro from "../src/components/create-orannyaro";

const Index: React.FC = () => {
    const [word, setWord] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(`${word}なんかおらんやろ〜〜〜〜wwwwwww`);
    };
    return <div>
        <h1>おらんやろメーカー</h1>
        <CreateOrannyaro onChange={handleChange} onClick={handleClick}/>
        <p>{word}</p>
    </div>
};

export default Index;
