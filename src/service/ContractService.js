import axios from "axios";

const CONTRACTS_REST_API_URL = 'http://localhost:8080/api/contracts';

class ContractService {
    getContracts() {
         return axios.get(CONTRACTS_REST_API_URL);
    }
    createContract(contract) {
        return axios.post(CONTRACTS_REST_API_URL, contract)
    }
    updateContract(contractId, contract){
        return axios.put(CONTRACTS_REST_API_URL + '/' + contractId,contract);
    }
    deleteContract(contractId) {
        return axios.delete(CONTRACTS_REST_API_URL+ '/' + contractId);
    }
}

export default new ContractService();