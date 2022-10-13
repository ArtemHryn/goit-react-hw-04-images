import styled from "styled-components";

export const SearchBarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.space[6]};
  padding-left: ${p => p.theme.space[6]};
  padding-top: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[5]};
  color: ${p => p.theme.colors.white};
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.sizes.searchForm};
  background-color: #fff;
  border-radius: ${p => p.theme.radii.searchForm};
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[2]};
  :placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;