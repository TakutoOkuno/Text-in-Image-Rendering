import React, {ChangeEvent, useEffect, useState, useRef, useCallback} from "react";
import InputUi from "../src/components/input-ui";
import {useDrawText, useLoadImage} from "../src/custom-hooks/custom-hooks";

const Index: React.FC = () => {
    const [sentence, setSentence] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const canvas = useRef<HTMLCanvasElement | null>(null);

    // useCallbackを使うと中身をメモ化できる→再レンダリングを防ぐことでパフォ低下阻止できる
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSentence(e.target.value);
    }, []);
    const handleClick = useCallback(() => {
        (async function () {
            if (canvas.current === null) {
                return;
            }
            await useLoadImage("/img/peing.jpeg", canvas.current);
            useDrawText(canvas.current, sentence);
            setImageUrl(canvas.current.toDataURL());
        })();
    }, [sentence]);

    // 今回は最初しか呼ばれないためdepsは不要
    useEffect(() => {
        if (canvas.current === null) {
            return;
        }
        useLoadImage("/img/peing.jpeg", canvas.current).then();
    }, []);

    return <div>
        <h1>文字入り画像ジェネレーター🎉</h1>
        <ol>
            <li>入力欄に文字を入力する</li>
            <li>「Render Text」で仕上がりを確認</li>
            <li>「Download as PNG」でダウンロード</li>
        </ol>
        <InputUi onChange={handleChange} onClick={handleClick} href={imageUrl}/>
        <canvas ref={canvas}/>
        <style jsx>{`
            div {
                margin: 10px;
                padding: 8px;
                border: 1px solid #000;
                border-radius: 6px;
            }
            ol {
                padding-left: 1.5em;
            }
        `}</style>
    </div>
};

export default Index;
