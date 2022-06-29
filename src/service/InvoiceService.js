import axios from "axios";

const INVOICES_REST_API_URL = 'http://localhost:8080/api/invoices';

class InvoiceService {
    getInvoices() {
         return axios.get(INVOICES_REST_API_URL);
    }
    createInvoice(invoice) {
        return axios.post(INVOICES_REST_API_URL, invoice);
    }
    updateInvoice(invoiceId, invoice){
        return axios.put(INVOICES_REST_API_URL + '/' + invoiceId,invoice);
    }
    deleteInvoice(invoiceId) {
        return axios.delete(INVOICES_REST_API_URL + '/' + invoiceId);
    }
}

export default new InvoiceService();