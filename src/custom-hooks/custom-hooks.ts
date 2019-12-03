const useLoadImage = (imagePath, canvas) => {
    return new Promise((resolve) => {
        const current = canvas.current;
        const ctx = current.getContext('2d');
        const image = new Image();
        image.src = imagePath;
        // 画像ロードが完了してからキャンバスの準備をする
        image.onload = () => {
            // キャンバスのサイズを画像サイズに合わせる
            current.width = image.width;
            current.height = image.height;
            // キャンバスに画像を描画（開始位置0,0）
            ctx.drawImage(image, 0, 0);
            resolve(image);
        };
    });
};

const useDrawText = (canvas, text) => {
    const current = canvas.current;
    const ctx = canvas.current.getContext('2d');
    //文字のスタイル・配置を指定
    ctx.font = '16px Hiragino Sans';
    ctx.fillStyle = '#404040';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    //座標を画像の中心に指定
    const x = (current.width / 2);
    const y = (current.height / 2 - 20); // 上下余白の分中心からずらす
    ctx.fillText(text, x, y);
    console.log(ctx)
};

export {useLoadImage, useDrawText};
