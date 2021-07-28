import http from "./http_common";


class CustomerDataService {
    getAll() {
        return http.get("/customer");
    }

    get(id) {
        return http.get(`/customer/${id}`);
    }

    create(data) {
        return http.post("/contract", data);
    }

    update(id, data) {
        return http.put(`/customer/${id}`, data);
    }

    delete(id) {
        return http.delete(`/customer/${id}`);
    }

    deleteAll() {
        return http.delete(`/customer`);
    }

    findByTitle(title) {
        return http.get(`/customer?title=${title}`);
    }
}

export default new CustomerDataService();