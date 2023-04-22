export const formatDate = (task) => {
    // Receives a Task object and returns formatted date
    if (task.due_date === null) return;

    const date = task.due_date.split("T")[0];
    const time = task.due_date.split("T")[1].slice(0, 5);

    // Converting HTML date input to human-friendly month
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const monthId = date.slice(5, 7);
    const formattedMonth = months[monthId - 1];

    const formattedDate = `${formattedMonth} ${date.slice(8, 10)}, ${date.slice(
        0,
        4
    )} | ${time}`;

    return formattedDate;
};
