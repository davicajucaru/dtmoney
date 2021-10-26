import { useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Development of website</td>
            <td className="deposit">R$12.000</td>
            <td>Development</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>License of Photoshop</td>
            <td className="withdraw">-R$1.000</td>
            <td>Licenses</td>
            <td>26/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
