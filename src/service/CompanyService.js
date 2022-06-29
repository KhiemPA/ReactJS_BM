import axios from "axios";

const COMPANIES_REST_API_URL = 'http://localhost:8080/api/companies';

class CompanyService {
    getCompanies() {
         return axios.get(COMPANIES_REST_API_URL);
    }
    createCompany(company) {
        return axios.post(COMPANIES_REST_API_URL, company)
    }
    updateCompany(companyId, company){
        return axios.put(COMPANIES_REST_API_URL + '/' + companyId,company);
    }
    deleteCompany(companyId) {
        return axios.delete(COMPANIES_REST_API_URL+ '/' + companyId);
    }
}

export default new CompanyService();