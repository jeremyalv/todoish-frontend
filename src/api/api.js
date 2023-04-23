import axios from "axios";

const API_URL = "https://jeremyalv.pythonanywhere.com/api";
const uname = "user01";
const pass = "jerealva";

const getAllTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks/`);

    return response.data;
};

const getTask = async (id) => {
    const response = await axios.get(`${API_URL}/tasks/${id}/`);

    return response.data;
};

const postTask = async (data) => {
    const response = await axios.post(
        `${API_URL}/tasks/`,
        {
            title: data.taskName,
            description: data.description,
            dueDate: data.dueDate,
            isFinished: false,
            category: data.category,
        },
        {
            auth: {
                username: uname,
                password: pass,
            },
        }
    );

    return response.data;
};

const putTask = async (id, data) => {
    const response = await axios.put(`${API_URL}/tasks/${id}/`, data);

    return response.data;
};

const patchTask = async (id, data) => {
    const response = await axios.patch(`${API_URL}/tasks/${id}/`, data);

    return response.data;
};

const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/tasks/${id}/`);

    return response.data;
};

export { getAllTasks, getTask, postTask, putTask, deleteTask, patchTask };
