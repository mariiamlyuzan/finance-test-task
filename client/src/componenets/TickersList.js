import { useState, useEffect } from 'react';
import { Wrapper, Input, Ul, Box } from '../styles/TickersList.styled';
import { Button } from '../styles/TickersItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { tickersOperations, tickersSelectors } from '../redux/ticker';
import { TickerItem } from './TickerItem';
import { IconContext } from 'react-icons';
import { TfiPlus } from 'react-icons/tfi';
import { Modal } from './Modal';
import { SetIntervalForm } from './SetIntervalForm';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');

export const TickersList = () => {
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const tickers = useSelector(tickersSelectors.getTickers);

  useEffect(() => {
    async function fetch() {
      try {
        await dispatch(tickersOperations.fetchTickers());
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
    return () => {
      socket.disconnect();
    };
  }, [dispatch, tickers]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleTickers = () => {
    return tickers && tickers.filter(ticker => ticker.ticker.includes(filter));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const filterTickers = getVisibleTickers();
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={'Search'}
        value={filter}
        onChange={changeFilter}
      ></Input>

      <Box>
        <Button type="button" onClick={toggleModal} border margin>
          <IconContext.Provider value={{ color: '#A9A9A9', size: '2em' }}>
            <div>
              <TfiPlus />
            </div>
          </IconContext.Provider>
        </Button>
        <SetIntervalForm />
      </Box>
      <Ul>
        {filterTickers &&
          filterTickers.map(ticker => (
            <TickerItem key={ticker.ticker} tick={ticker} {...ticker} />
          ))}
      </Ul>
      {showModal && <Modal onClose={toggleModal}></Modal>}
    </Wrapper>
  );
};
