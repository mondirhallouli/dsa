function countDown(number) {
    if (number <= 0) return;
    console.log(number);
    number--;
    countDown(number);
}

countDown(5);