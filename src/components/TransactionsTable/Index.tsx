import { Container } from "./styles";

export function TransactionsTable() {
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
            <td>License of PhotoShop</td>
            <td className="withdraw">-R$1.000</td>
            <td>Licenses</td>
            <td>26/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
