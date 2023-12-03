import { changeFilters } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter.value);

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        name="filter"
        type="text"
        value={filters}
        onChange={event => dispatch(changeFilters(event.currentTarget.value))}
      />
    </FilterLabel>
  );
};
