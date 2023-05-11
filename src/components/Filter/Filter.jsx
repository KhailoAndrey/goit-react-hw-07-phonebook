
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Label, Title, Input } from './Filter.styled';
import { getFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filterData = useSelector(selectFilter);
  const dispatch = useDispatch();
  function filterValue(e) {
  dispatch(getFilter(e.currentTarget.value))    
  }
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        placeholder="Начните вводить имя"
        value={filterData}
        onChange={filterValue}
      />
    </Wrapper>
  );
};

