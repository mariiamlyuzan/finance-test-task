import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { tickersOperations, tickersSelectors } from '../redux/ticker';
import { Form, Label, Select, Box } from '../styles/SetIntervalForm.styled';
import { Button } from '../styles/TickersItem.styled';
import { IconContext } from 'react-icons';
import { GiCheckMark } from 'react-icons/gi';

export const SetIntervalForm = () => {
  const interval = useSelector(tickersSelectors.getInterval);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      interval: interval,
    },

    onSubmit: values => {
      dispatch(tickersOperations.setInterval(values.interval));
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <Label htmlFor="interval">Change interval</Label>
          <Select
            name="interval"
            value={formik.values.interval}
            onChange={formik.handleChange}
          >
            <option value={2000}>2000</option>
            <option value={5000}>5000</option>
            <option value={10000}>10000</option>
          </Select>
        </Box>
        <Button type="submit" aria-label="button-name">
          <IconContext.Provider value={{ color: '#A9A9A9', size: '1.5em' }}>
            <div>
              <GiCheckMark />
            </div>
          </IconContext.Provider>
        </Button>
      </Form>
    </>
  );
};
