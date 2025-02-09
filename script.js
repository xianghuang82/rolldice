function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createPolygonPoints(sides, radius, centerX, centerY) {
    const points = [];
    for (let i = 0; i < sides; i++) {
        const angle = (2 * Math.PI * i) / sides;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push(`${x},${y}`);
    }
    return points.join(' ');
}

document.getElementById('roll-dice').addEventListener('click', function () {
    const diceNum = parseInt(document.getElementById('dice-num').value);
    const diceFace = parseInt(document.getElementById('dice-face').value);
    const diceContainer = document.getElementById('dice-container');
    const resultDiv = document.getElementById('result');

    // 清空之前的骰子和结果
    diceContainer.innerHTML = '';
    resultDiv.innerHTML = '';

    let resultText = '投掷结果: ';
    for (let i = 0; i < diceNum; i++) {
        const randomResult = Math.floor(Math.random() * diceFace) + 1;
        resultText += randomResult + ' ';

        // 创建 SVG 元素
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '60');
        svg.setAttribute('height', '60');
        svg.classList.add('dice');

        // 创建多边形
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const centerX = 30;
        const centerY = 30;
        const radius = 25;
        const points = createPolygonPoints(diceFace, radius, centerX, centerY);
        polygon.setAttribute('points', points);
        polygon.setAttribute('stroke', '#333');
        polygon.setAttribute('stroke-width', '2');
        const randomColor = getRandomColor();
        polygon.setAttribute('fill', randomColor);

        // 创建文本元素
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', centerX);
        text.setAttribute('y', centerY);
        text.textContent = randomResult;

        // 将元素添加到 SVG 中
        svg.appendChild(polygon);
        svg.appendChild(text);

        // 将 SVG 添加到骰子容器中
        diceContainer.appendChild(svg);
    }

    resultDiv.textContent = resultText;
});