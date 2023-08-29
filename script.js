// eachTextAnimeにappeartextというクラス名を付ける定義
function eachTextAnimeControl() {
  document.querySelectorAll('.eachTextAnime').forEach((element) => {
    const elemPos = element.getBoundingClientRect().top - 50;
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scroll >= elemPos - windowHeight) {
      element.classList.add("appeartext");
    } else {
      element.classList.remove("appeartext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
window.addEventListener('scroll', () => {
  eachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});

// 画面が読み込まれたらすぐに動かしたい場合の記述
window.addEventListener('load', () => {
  //spanタグを追加する
  const elements = document.querySelectorAll(".eachTextAnime");
  elements.forEach((element) => {
    const text = element.textContent;
    let textbox = "";
    text.split('').forEach((t, i) => {
      if (t !== " ") {
        if (i < 10) {
          textbox += `<span style="animation-delay:.${i}s;">${t}</span>`;
        } else {
          const n = i / 10;
          textbox += `<span style="animation-delay:${n}s;">${t}</span>`;
        }
      } else {
        textbox += t;
      }
    });
    element.innerHTML = textbox;
  });

  eachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});
