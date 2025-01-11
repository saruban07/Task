for (let i = 1; i <= 10; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    console.log(` ${factorial}`);
}