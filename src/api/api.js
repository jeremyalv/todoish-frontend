import axios from "axios";

const API_URL = "http:localhost:8000/api";

const getAllTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks/`);
    console.log(response.data);

    return response.data;
};

const getTask = async (id) => {
    const response = await axios.get(`${API_URL}/tasks/${id}`);
    console.log(response.data);

    return response.data;
};

const postTask = async (data) => {
    const response = await axios.post(`${API_URL}/tasks/`, data);
    console.log(response.data);

    return response.data;
};

const putTask = async (data) => {
    const response = await axios.put(`${API_URL}/tasks/`, data);
    console.log(response.data);

    return response.data;
};

const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    console.log(response.data);

    return response.data;
};

export { getAllTasks, getTask, postTask, putTask, deleteTask };
