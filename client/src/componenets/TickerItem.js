import {
  Li,
  P,
  P2,
  ColorP,
  Span,
  Box,
  Message,
  Wrapper,
} from '../styles/TickersItem.styled';
import { IconContext } from 'react-icons';
import { Button } from '../styles/TickersItem.styled';
import { useDispatch } from 'react-redux';
import { ImBin } from 'react-icons/im';
import { tickersOperations } from '../redux/ticker';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const TickerItem = ({
  tick,
  change,
  change_percent,
  dividend,
  exchange,
  last_trade_time,
  price,
  ticker,
}) => {
  const [visibleInfo, setVisibleInfo] = useState(true);
  const [changeNameButton, setChangeNameButton] = useState('show less');
  const dispatch = useDispatch();

  const toggleVisibleInfo = () => {
    setVisibleInfo(!visibleInfo);
    setChangeNameButton(visibleInfo === false ? 'show less' : 'show more');
  };
  return (
    <Li>
      <P2 visible={visibleInfo}>{ticker}</P2>
      <Wrapper visible={visibleInfo}>
        <Box>
          <P has margin10>
            {ticker}
          </P>
          <P margin10>{exchange}</P>
          <P>{last_trade_time?.slice(0, 10)}</P>
        </Box>

        <Box>
          <Span font>price</Span>
          <P has>{price} $</P>
        </Box>
        <Box>
          {' '}
          <Span>change</Span>
          <P redColor margin10 padding6>
            {change}
          </P>
          <Span>change percent</Span>
          <ColorP redColor padding6 category={change_percent}>
            {change_percent}
          </ColorP>
        </Box>

        <Box>
          <Span>divident</Span>
          <ColorP greenColor margin10 padding6 category={dividend}>
            {dividend}
          </ColorP>
          <Span>yield</Span>
          <ColorP greenColor padding6 category={tick?.yield}>
            {tick?.yield}
          </ColorP>
        </Box>
        <Box>
          <Button
            aria-label="button-name"
            onClick={() => {
              dispatch(tickersOperations.deleteTickers(ticker));
              toast.success(`${ticker} deleted`);
            }}
          >
            <IconContext.Provider value={{ color: '#A9A9A9', size: '2.5em' }}>
              <div>
                <ImBin />
              </div>
            </IconContext.Provider>
            <Message>Remove from the list</Message>
          </Button>
        </Box>
      </Wrapper>
      <Button
        onClick={() => {
          toggleVisibleInfo();
        }}
        has
      >
        {changeNameButton}
      </Button>
    </Li>
  );
};
