document.getElementById('calorie-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // الحصول على القيم من الحقول
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity-level').value);

    let height1 = height

    console.log("الطول" + height1);


    let idealWeight;
    let bmr;
    // تحقق من الجنس واحسب الوزن المثالي
    if (gender === "male") {
        // للرجال
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        // للنساء
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    else if (gender === "bebe1-3") {
        // للنساء
        bmr = 80 * weight;
    }
    else if (gender === "bebe4-5") {
        // للنساء
        bmr = 70 * weight;
    }
    else if (gender === "bebe6-8") {
        // للنساء
        bmr = 60 * weight;
    }
    else if (gender === "bebe6-8!") {
        // للنساء
        bmr = 65 * weight;
    }
    else if (gender === "bebe9-18") {
        // للنساء
        bmr = 35 * weight;
    }
    else if (gender === "bebe9-18!") {
        // للنساء
        bmr = 45 * weight;
    }



















    // } else if (gender === "brgnet1") {
    //     // للنساء
    //     idealWeight = height1 - 99 - (height1 - 150) / 2;
    // }else if (gender === "brgnet2") {
    //     // للنساء
    //     idealWeight = height1 - 99 - (height1 - 150) / 2;
    // }else if (gender === "brgnet3") {
    //     // للنساء
    //     idealWeight = height1 - 99 - (height1 - 150) / 2;
    // }else if (gender === "mama") {
    //     // للنساء
    //     idealWeight = (height1 - 100) - (height1 - 150) / 2 ;
    // }




    console.log("الوزن المثالي" + idealWeight);









    // حساب BMR





    // حساب TDEE
    let tdee = 0;
    // bmr * activityLevel


    if (gender === 'male') {
        tdee = bmr * activityLevel;
    } else if (gender === 'female') {
        tdee = bmr * activityLevel
    }



    if (gender === 'brgnet1') {
        tdee += 50;
    } else if (gender === "brgnet2") {
        tdee += 250;
    } else if (gender === "brgnet3") {
        tdee += 450;
    } else if (gender === "mama") {
        tdee += 500;
    }
    else if (gender === "bebe1-3") {
        tdee = bmr;
    }
    else if (gender === "bebe4-5") {
        tdee = bmr;
    }
    else if (gender === "bebe6-8") {
        tdee = bmr;
    }
    else if (gender === "bebe6-8!") {
        tdee = bmr;
    }
    else if (gender === "bebe9-18") {
        tdee = bmr;
    } else if (gender === "bebe9-18!") {
        tdee = bmr;
    }
    const proteinInput = parseFloat(document.getElementById('protein-input').value);
    const fatInput = parseFloat(document.getElementById('fat-input').value);
    // const carbsInput = parseFloat(document.getElementById('carbs-input').value);

    // توزيع الماكروز
    const proteinCalories = tdee * proteinInput; // 30% للبروتين
    const fatCalories = tdee * fatInput;    // 25% للدهون
    const carbCalories = tdee - (proteinCalories + fatCalories);

    const proteinGrams = proteinCalories / 4; // 1 جرام بروتين = 4 سعرات
    const fatGrams = fatCalories / 9;        // 1 جرام دهون = 9 سعرات
    const carbGrams = carbCalories / 4;     // 1 جرام كربوهيدرات = 4 سعرات








    // عرض النتائج
    document.getElementById('calories-result').textContent = `احتياجك اليومي: ${Math.round(tdee)} سعر حراري.`;
    document.getElementById('macros-result').textContent =
        `البروتين: ${Math.round(proteinGrams)} جم، الدهون: ${Math.round(fatGrams)} جم، الكربوهيدرات: ${Math.round(carbGrams)} جم.`;







































































    function distributeExchanges(carbs, protein, fats) {
        // القيم التغذوية لكل بديل
        const dairy = { carbs: 12, protein: 8, fats: 0 };
        const vegetables = { carbs: 5, protein: 2, fats: 0 };
        const bread = { carbs: 15, protein: 2, fats: 0 };
        const fruits = { carbs: 15, protein: 0, fats: 0 };
        const meat = { carbs: 0, protein: 7, fats: 3 };
        const fatsGroup = { carbs: 0, protein: 0, fats: 5 };



        let dairyServings = parseInt(document.getElementById('dairy-servings').value);
        let vegetableServings = parseInt(document.getElementById('vegetable-servings').value);
        // let breadServings = parseInt(document.getElementById('bread-servings').value);
        let fruitServings = parseInt(document.getElementById('fruit-servings').value);



        // عدد الحصص الثابتة للألبان والخضراوات
         dairyServings = dairyServings;
         vegetableServings = vegetableServings;
         fruitServings = fruitServings
        // حساب المغذيات المخصصة للألبان والخضراوات
        const dairyCarbs = dairyServings * dairy.carbs;
        const dairyProtein = dairyServings * dairy.protein;
        const dairyFats = dairyServings * dairy.fats;

        const vegetableCarbs = vegetableServings * vegetables.carbs;
        const vegetableProtein = vegetableServings * vegetables.protein;

        const fruitcarb = fruitServings * fruits.carbs;
        // const breadProtein = breadServings * bread.protein;


        // طرح المغذيات المخصصة للألبان والخضراوات من الإجمالي
        carbs -= (dairyCarbs + vegetableCarbs + fruitcarb);
        protein -= (dairyProtein + vegetableProtein  );
        fats -= dairyFats;

        // التأكد من أن الكميات غير سالبة
        // carbs = Math.max(0, carbs);
        // protein = Math.max(0, protein);
        // fats = Math.max(0, fats);

        // توزيع باقي الكربوهيدرات على الخبز والفاكهة
        // let breadServings = Math.floor(protein / bread.protein ); // كل بديل خبز يحتوي على 15 كربوهيدرات و2 بروتين و1 دهون
        // carbs -= breadServings * bread.carbs;
        // protein -= breadServings * bread.protein;
        // fats -= breadServings * bread.fats;

        let breadServings = (carbs / bread.carbs).toFixed(2); // كل بديل فاكهة يحتوي على 15 كربوهيدرات
        protein -= breadServings * bread.protein;
        // توزيع باقي البروتين على اللحوم
        let meatServings = (protein / meat.protein).toFixed(2); // كل بديل لحوم يحتوي على 7 بروتين و5 دهون
        protein -= meatServings * meat.protein;
        fats -= meatServings * meat.fats;

        // توزيع باقي الدهون على بدائل الدهون
        let fatsServings = (fats / fatsGroup.fats).toFixed(2); // كل بديل دهون يحتوي على 5 دهون

        // النتائج
        return {
            dairy: dairyServings,
            vegetables: vegetableServings,
            bread: breadServings,
            fruits: fruitServings,
            meat: meatServings,
            fats: fatsServings
        };
    }

    // طلب القيم من المستخدم
    // const carbs = parseFloat(prompt("أدخل كمية الكربوهيدرات (جم):"));
    // const protein = parseFloat(prompt("أدخل كمية البروتين (جم):"));
    // const fats = parseFloat(prompt("أدخل كمية الدهون (جم):"));

    // حساب التوزيع
    const results = distributeExchanges(carbGrams, proteinGrams, fatGrams);

    // عرض النتائج
    console.log("توزيع الحصص:");
    console.log(`- الألبان: ${results.dairy} حصص`);
    console.log(`- الخضراوات: ${results.vegetables} حصص`);
    console.log(`- الخبز: ${results.bread} حصص`);
    console.log(`- الفاكهة: ${results.fruits} حصص`);
    console.log(`- اللحوم: ${results.meat} حصص`);
    console.log(`- الدهون: ${results.fats} حصص`);

    document.getElementById("ss").innerHTML = ` الوزن المثالي: ${idealWeight} `
    document.getElementById("bdel").innerHTML = ` الألبان: ${results.dairy} حصص` + " " + ` الخضراوات: ${results.vegetables} حصص` + " " + ` الخبز: ${results.bread} حصص` + " " + ` الفاكهة: ${results.fruits} حصص` + " " + ` اللحوم: ${results.meat} حصص` + " " + ` الدهون: ${results.fats} حصص`
});







