import { Header, H1, P } from '../styles/AppBar.styled';
import { dateNow } from '../helpers/dateNow';

export const AppBar = () => {
  return (
    <Header>
      <H1>Stocks</H1>
      <P>{dateNow()}</P>
    </Header>
  );
};
