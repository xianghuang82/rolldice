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

        // 创建骰子元素
        const dice = document.createElement('div');
        dice.classList.add('dice');
        // 根据骰子面数添加对应的颜色类名
        dice.classList.add(`dice-${diceFace}`);
        dice.textContent = randomResult;
        diceContainer.appendChild(dice);
    }

    resultDiv.textContent = resultText;
});