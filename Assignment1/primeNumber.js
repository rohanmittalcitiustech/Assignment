var count, i, j;
for (i = 5; i <= 50; i++) {
    count = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            count = 1;
            break;
        }
    }

    if (i > 1 && count == 0) {
        console.log(i);
    }
}

