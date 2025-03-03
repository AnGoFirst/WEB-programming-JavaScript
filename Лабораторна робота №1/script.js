function triangle(value1, type1, value2, type2) {
    console.log("Параметри функції: triangle(значення 1, 'тип 1', значення 2, 'тип 2');");
    console.log("Типи: ");
    console.log("'leg' - катет, ");
    console.log("'hypotenuse' - гіпотенуза, ");
    console.log("'adjacent angle' - прилеглий до катета кут, ");
    console.log("'opposite angle' - протилежний до катета кут, "); 
    console.log("'angle' - один з двох гострих кутів (коли задана гіпотенуза)");

    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Помилка! Неправильний тип аргументу, перевірте інструкцію!");
        return "failed";
    }
    
    if (value1 <= 0 || value2 <= 0) {
        console.log("Помилка! Значення повинні бути додатними числами!");
        return "failed";
    }
    
    let a, b, c, alpha, beta;
    
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    function toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    
    if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a ** 2 + b ** 2);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    } else if (type1 === "leg" && type2 === "hypotenuse" || type1 === "hypotenuse" && type2 === "leg") {
        c = Math.max(value1, value2);
        a = Math.min(value1, value2);
        if (a >= c) {
            console.log("Помилка! Катет не може бути більшим або рівним гіпотенузі!");
            return "failed";
        }
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    } else if (type1 === "leg" && type2 === "adjacent angle" || type1 === "adjacent angle" && type2 === "leg") {
        let leg = type1 === "leg" ? value1 : value2;
        let adjAngle = type1 === "adjacent angle" ? value1 : value2;
        if (adjAngle >= 90) {
            console.log("Помилка! Кут має бути гострим (менше ніж 90 градусів)!");
            return "failed";
        }
        a = leg;
        alpha = adjAngle;
        beta = 90 - alpha;
        c = a / Math.cos(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
    } else if (type1 === "leg" && type2 === "opposite angle" || type1 === "opposite angle" && type2 === "leg") {
        let leg = type1 === "leg" ? value1 : value2;
        let oppAngle = type1 === "opposite angle" ? value1 : value2;
        if (oppAngle >= 90) {
            console.log("Помилка! Кут має бути гострим (менше ніж 90 градусів)!");
            return "failed";
        }
        a = leg;
        alpha = oppAngle;
        beta = 90 - alpha;
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
    } else if (type1 === "hypotenuse" && type2 === "angle" || type1 === "angle" && type2 === "hypotenuse") {
        let hyp = type1 === "hypotenuse" ? value1 : value2;
        let ang = type1 === "angle" ? value1 : value2;
        if (ang >= 90) {
            console.log("Помилка! Кут має бути гострим (менше ніж 90 градусів)!");
            return "failed";
        }
        c = hyp;
        alpha = ang;
        beta = 90 - alpha;
        a = c * Math.sin(toRadians(alpha));
        b = Math.sqrt(c ** 2 - a ** 2);
    } else {
        console.log("Помилка! Неможливо визначити трикутник за вказаними параметрами!");
        return "failed";
    }
    
    console.log("");
    console.log(`Результати:`);
    console.log(`a - катет: ${a.toFixed(2)}`);
    console.log(`b - катет: ${b.toFixed(2)}`);
    console.log(`c - гіпотенуза: ${c.toFixed(2)}`);
    console.log(`alpha - кут навпроти a: ${alpha.toFixed(2)}`);
    console.log(`beta - кут навпроти b: ${beta.toFixed(2)}`);
    
    return "success";
}

triangle(7, "leg", 18, "hypotenuse");