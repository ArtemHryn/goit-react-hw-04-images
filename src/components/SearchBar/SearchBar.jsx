import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchBarInput,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    search: '',
  };
  onChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };
  onFormSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state.search);
      this.setState({search: ''})
  };
  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchFormButton type="submit">
            <FcSearch style={{ width: 30, height: 30 }} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchBarInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.onChange}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
