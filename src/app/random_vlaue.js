var assign_vale = [];

function getRandomImage() {
    assign_vale = [];
    let path = "/Users/samin/Desktop/yahtzee/pix/";
    const num1 = 1 + Math.floor(Math.random() * 6);
    const imgStr1 = '<img src="' + path + "dice" + num1 + '.gif">';
    assign_vale.push(num1);

    const num2 = 1 + Math.floor(Math.random() * 6);
    const imgStr2 = '<img src="' + path + "dice" + num2 + '.gif">';
    assign_vale.push(num2);

    const num3 = 1 + Math.floor(Math.random() * 6);
    const imgStr3 = '<img src="' + path + "dice" + num3 + '.gif">';
    assign_vale.push(num3);

    const num4 = 1 + Math.floor(Math.random() * 6);
    const imgStr4 = '<img src="' + path + "dice" + num4 + '.gif">';
    assign_vale.push(num4);

    const num5 = 1 + Math.floor(Math.random() * 6);
    const imgStr5 = '<img src="' + path + "dice" + num5 + '.gif">';
    assign_vale.push(num5);

    const num6 = 1 + Math.floor(Math.random() * 6);
    const imgStr6 = '<img src="' + path + "dice" + num6 + '.gif">';
    assign_vale.push(num6);

    document.getElementById("pick_gen").innerHTML = imgStr1 +" "+imgStr2 +" "+ imgStr3 +" "+ imgStr4 +" "+ imgStr5 +" "+ imgStr6;

    document.close();
    // console.log(assign_vale);
}

