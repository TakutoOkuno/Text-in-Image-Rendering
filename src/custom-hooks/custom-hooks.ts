// 厳密に言えばこれはHooksではない
const useLoadImage = (imagePath: string, canvas: HTMLCanvasElement) => {
  return new Promise((resolve, reject) => {
    const ctx = canvas.getContext("2d");
    if (ctx === null) {
      reject(new Error("Failed to getContext."));
      return;
    }
    const image = new Image();
    image.src = imagePath;
    // 画像ロードが完了してからキャンバスの準備をする
    image.onload = () => {
      // キャンバスのサイズを画像サイズに合わせる
      canvas.width = image.width;
      canvas.height = image.height;
      // キャンバスに画像を描画（開始位置0,0）
      ctx.drawImage(image, 0, 0);
      resolve();
    };
  });
};

const useDrawText = (canvas: HTMLCanvasElement, text: string) => {
  const ctx = canvas.getContext("2d");
  if (ctx === null) {
    throw new Error("Failed to getContext.");
  }
  //文字のスタイル・配置を指定
  ctx.font = "16px Hiragino Sans";
  ctx.fillStyle = "#404040";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  //座標を画像の中心に指定
  const x = canvas.width / 2;
  const y = canvas.height / 2 - 20; // 上下余白の分中心からずらす
  ctx.fillText(text, x, y);
  console.log(ctx);
};

export { useLoadImage, useDrawText };
