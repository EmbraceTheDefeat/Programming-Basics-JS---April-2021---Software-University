function bookList(input) {
    const numberOfPagesInBook = Number(input[0]);
    const pagesForOneHour = Number(input[1]);
    const numberOfDays = Number(input[2]);

    const timeToReadBook = numberOfPagesInBook / pagesForOneHour;
    const neededHoursForDay = timeToReadBook / numberOfDays;
    console.log(neededHoursForDay);
};

bookList([212, 20, 2]);
bookList([432, 15, 4]);