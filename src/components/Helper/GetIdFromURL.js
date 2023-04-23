export const GetIdFromURL = (task) => {
    // Split task by /
    const arr = task.url.split("/");

    // Get Task id from task URL (last_position - 2)
    const id = arr[arr.length - 2];

    return id;
};
