export const GMTtoWIB = (date) => {
    // Make a copy with Date constructor
    const dateCopy = new Date(date);

    dateCopy.setHours(dateCopy.getHours() + 7);

    return dateCopy;
};
