// 6つの外側の円を配置する
const outerCircles = document.querySelectorAll('.outer-circle');
const radius = 350; // 中心からの距離
const circleCount = 6; // 円の数を6に設定
const outerContainer = document.querySelector('.outer-circles');
const centerX = outerContainer.offsetWidth / 2; // 画面中央のX座標
const centerY = outerContainer.offsetHeight / 2; // 画面中央のY座標
const centerCircle = document.querySelector('.center-circle');
const centerCircleRadius = centerCircle.offsetWidth / 2; // 中心円の半径

// 外側円にクリックイベントを追加する
outerCircles.forEach((circle, index) => {
    // 右上の円を1番目に配置
    const newIndex = (index + 1) % circleCount;
    const angle = (2 * Math.PI * newIndex) / circleCount;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    circle.style.left = (x + centerX - circle.offsetWidth / 2) + 'px';
    circle.style.top = (y + centerY - circle.offsetHeight / 2) + 'px';

    circle.addEventListener('click', () => {
        const photoURLs = [
            'z_idea.jpg',
            'z_memo-1.jpg',
            'z_memo-2.jpg',
            'z_memo-3.jpg',
            'z_memo-4.jpg',
            'z_memo-5.jpg',
        ];

        // 対応する写真のURLを取得
        const photoURL = photoURLs[newIndex];


        // iframeを作成して全画面に表示する
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.zIndex = '9999';
        document.body.appendChild(iframe);

        // iframe内に画像を表示するimg要素を追加
        const img = document.createElement('img');
        img.src = photoURL;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain'; // 画像をiframe内に収める
        img.addEventListener('click', () => {
            document.body.removeChild(iframe); // 画像がクリックされたらiframeを削除する
        });
        iframe.contentDocument.body.appendChild(img);

        // iframe外のクリックでiframeを削除する
        iframe.addEventListener('click', () => {
            document.body.removeChild(iframe);
        });
    });

    // 各円に番号を振る
    const number = document.createElement('div');
    number.textContent = newIndex + 1;
    number.classList.add('circle-number');
    circle.appendChild(number);

    const line = document.createElement('div');
    line.classList.add('line');
    const lineLength = radius;
    line.style.width = lineLength + 'px';
    line.style.height = '2px';
    line.style.left = centerX + 'px';
    line.style.top = centerY - 1 + 'px';
    line.style.transformOrigin = 'left';
    line.style.transform = 'rotate(' + (angle * (180 / Math.PI)) + 'deg)';
    outerContainer.appendChild(line);

    circle.style.zIndex = "2";
});

centerCircle.style.zIndex = '2';

// 中央の円にクリックイベントを追加する
centerCircle.addEventListener('click', () => {
    const photoURL = 'IMG.jpg'; // 写真のURL

    // iframeを作成して全画面に表示する
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    document.body.appendChild(iframe);

    // iframe内に画像を表示するimg要素を追加
    const img = document.createElement('img');
    img.src = photoURL;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain'; // 画像をiframe内に収める
    img.addEventListener('click', () => {
        document.body.removeChild(iframe); // 画像がクリックされたらiframeを削除する
    });
    iframe.contentDocument.body.appendChild(img);

    // iframe外のクリックでiframeを削除する
    iframe.addEventListener('click', () => {
        document.body.removeChild(iframe);
    });
});
