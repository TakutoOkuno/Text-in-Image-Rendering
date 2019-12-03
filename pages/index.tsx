import * as React from "react";
import {ChangeEvent, useEffect, useState} from "react";
import InputUi from "../src/components/input-ui";
import {useRef} from "react";
import {useDrawText, useLoadImage} from "../src/custom-hooks/custom-hooks";

const Index: React.FC = () => {
    const [word, setWord] = useState("");
    const [imageDownloadUrl, setImageUrl] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };
    async function handleClick() {
        await useLoadImage("/img/peing.jpeg", canvas);
        useDrawText(canvas, word);
        setImageUrl(canvas.current.toDataURL());
    }
    const canvas = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
        useLoadImage("/img/peing.jpeg", canvas).then();
    }, [canvas]);

    return <div>
        <section>
            <h1>文字入り画像ジェネレーター🎉</h1>
            <ol>
                <li>入力欄に文字を入力する</li>
                <li>「Render Text」で仕上がりを確認</li>
                <li>「Download as PNG」でダウンロード</li>
            </ol>
            <InputUi onChange={handleChange} onClick={handleClick} href={imageDownloadUrl}/>
            <canvas ref={canvas}/>
        </section>
        <style jsx>{`
            div {
                margin: 10px;
                border: 1px solid #000;
                border-radius: 6px;
            }
            section {
                margin: 8px;
            }
            ol {
                padding-left: 1.5em;
            }
        `}</style>
    </div>
};

export default Index;
