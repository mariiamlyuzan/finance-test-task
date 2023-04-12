import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { tickersOperations, tickersSelectors } from '../redux/ticker';
import { toast } from 'react-toastify';
import { Button } from '../styles/TickersItem.styled';
import { Form, Label, Input, Span, Div } from '../styles/AddTickerForm.styled';
import { IconContext } from 'react-icons';
import { TfiPlus } from 'react-icons/tfi';
import * as Yup from 'yup';

export const AddTickerForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const tickers = useSelector(tickersSelectors.getTickers);
  const formik = useFormik({
    initialValues: {
      ticker: '',
    },
    validationSchema: Yup.object({
      ticker:
        Yup.string()
        .required('Nothing entered'),
    }),
    onSubmit: values => {
      if (tickers.find(ticker => ticker.ticker === values.ticker)) {
        toast.error(`${values.ticker} already in list.`);
        return;
      }

      dispatch(tickersOperations.addTickers(values.ticker));

      toast.success(`${values.ticker} add to list`);
      onClose();
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="ticker"></Label>
        <Div>
          {formik.touched.ticker && formik.errors.ticker && (
            <Span>{formik.errors.ticker}</Span>
          )}
        </Div>
        <Input
          id="ticker"
          name="ticker"
          type="ticker"
          onChange={formik.handleChange}
          value={formik.values.ticker}
          placeholder="Enter the name of the ticker you want to add"
        />

        <Button type="submit" data-testid="add-button" border>
          <IconContext.Provider value={{ color: '#A9A9A9', size: '2em' }}>
            <div>
              <TfiPlus />
            </div>
          </IconContext.Provider>
        </Button>
      </Form>
    </>
  );
};
