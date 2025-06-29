// const seatingChart = [
//     ["ニャンちゅ", "なりたい"],
//     ["俺も", "ニャンちゅに"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     for (let j = 0; j < seatingChart.length; j++) {
//         console.log(`iは${i}`);
//         console.log(`jは${j}`);
//         console.log(seatingChart[i][j]);
//         console.log("\n");
//     }
// }

const seatingChart = [
    ["伊藤", "松本", "鈴木"],
    ["井上", "田中", "河野", "吉田"],
    ["安部", "後藤", "橋本"],
];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(`iは${i}`);
        console.log(`jは${j}`);
        console.log(row[j]);
        console.log("\n");
    }
}
