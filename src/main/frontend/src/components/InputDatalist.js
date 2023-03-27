import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  .autocomplete-input {
    padding: 0 1rem;
    width: 100%;
    ::placeholder {
      color: var(--color-gray);
      font-family: Interop-Light;
    }
    outline: none;
    font-size: 1rem;
  }
  .datalist-items {
    min-width: calc(100%);
    max-height: 18.5rem;
    margin-top: 1.75rem;
    font-size: 1.125rem;
    background-color: var(--color-white);
    border-radius: 1rem;
    filter: drop-shadow(0px 6px 10px var(--color-shadow));
    overflow: auto;
    > * {
      padding: 1rem;
      :hover {
        ${media.greaterThan("medium")`
          background-color: var(--color-maingreen--10);
        `};
      }
    }
    ${media.lessThan("medium")`
      min-width: unset;
      max-width: unset;
      width: 100%;
      margin-top: 1.25rem;
      margin-bottom: -0.75rem;
      max-height: 15rem;
      filter: none;
      border: 1px solid var(--color-maingreen--50);
    `};
  }
  .datalist-active-item {
    background-color: var(--color-maingreen--25);
    :hover {
      ${media.greaterThan("medium")`
        background-color: var(--color-maingreen--25);
      `};
    }
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1.375rem;
  /* top: 50%;
  transform: translateY(-50%); */
  width: 1.25rem;
  height: 1.25rem;
  font-size: 1.25rem;
  color: var(--color-lightgray);
  :hover {
    color: var(--color-gray);
  }
`;

const HomeDatalist = ({ values, placeholder, item, setItem }) => {
    const handleClearClick = () => {
        setItem("");
    };
    return (
        <Container>
            <div
            />
            {item && (
                <ClearBtn onClick={handleClearClick}>
                    <div/>
                </ClearBtn>
            )}
        </Container>
    );
};


export default HomeDatalist;