import http from "./http_common";


class TutorialDataService {
    getAll() {
        return http.get("/costumer");
    }

    get(id) {
        return http.get(`/costumer/${id}`);
    }

    create(data) {
        return http.post("/costumer", data);
    }

    update(id, data) {
        return http.put(`/costumer/${id}`, data);
    }

    delete(id) {
        return http.delete(`/costumer/${id}`);
    }

    deleteAll() {
        return http.delete(`/costumer`);
    }

    findByTitle(title) {
        return http.get(`/costumer?title=${title}`);
    }
}

export default new TutorialDataService();