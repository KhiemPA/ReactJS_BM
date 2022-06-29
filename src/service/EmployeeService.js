import axios from "axios";

const EMPLOYEES_REST_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService {
    getEmployees() {
         return axios.get(EMPLOYEES_REST_API_URL);
    }
    createEmployee(employee) {
        return axios.post(EMPLOYEES_REST_API_URL, employee);
    }
    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEES_REST_API_URL + '/' + employeeId,employee);
    }
    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEES_REST_API_URL + '/' + employeeId);
    }
}

export default new EmployeeService();
