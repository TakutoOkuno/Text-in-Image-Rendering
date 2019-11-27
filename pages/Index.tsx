import * as React from "react";
import {ChangeEvent, useEffect, useState} from "react";
import CreateOrannyaro from "../src/components/create-orannyaro";
import {useRef} from "react";

const Index: React.FC = () => {
    const [word, setWord] = useState("");
    const [a, setA] = useState("");
    const [imageDownloadUrl, setImageUrl] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
        word ? setA(`${word}なんかおらんやろ〜〜〜〜〜〜〜wwwwwwwwwww`) : setA("");
        setImageUrl(canvas.current.toDataURL());
        drawText(canvas, word);
    };
    const handleClick = () => {
        return;
        // word ? setA(`${word}なんかおらんやろ〜〜〜〜〜〜〜wwwwwwwwwww`) : setA("");
        // drawText(canvas, word);
    };
    const canvas = useRef<HTMLCanvasElement | null>(null);
    function loadImage(imagePath, canvas)
    {
        //画像を読み込んでImageオブジェクトを作成する
        const image = new Image();
        image.src = imagePath;
        image.onload = (function () {
            //画像ロードが完了してからキャンバスの準備をする

            const ctx = canvas.current.getContext('2d');
            //キャンバスのサイズを画像サイズに合わせる
            canvas.current.width = image.width;
            canvas.current.height = image.height;
            //キャンバスに画像を描画（開始位置0,0）
            ctx.drawImage(image, 0, 0);
        });
    }

    function drawText(canvas, text)
    {
        const current = canvas.current;
        const ctx = canvas.current.getContext('2d');
        //文字のスタイルを指定
        ctx.font = '200px serif';
        ctx.fillStyle = '#404040';
        //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
        ctx.textBaseline = 'center';
        ctx.textAlign = 'center';
        //座標を指定して文字を描く（座標は画像の中心に）
        const x = (current.width / 2);
        const y = (current.height / 2 - 20);
        console.log(canvas, text, ctx);
        ctx.fillText(text, x, y);
    }

    useEffect(() => {
        loadImage("/static/img/peing.jpeg", canvas);
    }, [canvas]);

    return <>
        <CreateOrannyaro onChange={handleChange} onClick={handleClick} href={imageDownloadUrl}/>
        <section>
            <img src="/static/img/peing.jpeg" alt="topimg"/>
            <p>{a ? a : 'テキストを入力するとここにサンプルが表示されます'}</p>
        </section>
        <canvas ref={canvas}/>
        <style jsx>{`
            section {
                position: relative;
                display: inline-block;
            }
            p {
                width: 540px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateY(-50%) translateX(-50%);
                padding-top: 22px;
                padding-bottom: 63px;
                margin: auto;
                margin-top: 0;
                margin-bottom: 0;
                text-align: center;
                vertical-align: middle;
                display: block;
            }
        `}</style>
    </>
};

export default Index;
