let tasks = [];
export const addTaskCallback = (task, callback) => {
    setTimeout(() => {
        tasks.push(task);
        callback("Task added (Callback)");
    }, 1000);
};

export const listTasksCallback = (callback) => {
    setTimeout(() => {callback(tasks);}, 1000);
};

export const addTaskPromise = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            tasks.push(task);
            resolve("Task added (Promise)");
        }, 1000);
    });
};

export const listTasksPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(tasks);}, 1000);
    });
};

export const deleteTaskPromise = (index) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tasks[index]) {
                tasks.splice(index, 1);
                resolve("Task deleted");
            } else {
                reject("Invalid index");
            }

        }, 1000);

    });

};