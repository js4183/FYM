import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";

const InputWrapper = styled.label`
  border-radius: 1rem;
  display: flex;
  :hover {
    ${media.greaterThan("medium")`
      background-color: var(--color-darkwhite);
    `};
  }
  position: relative;
  .bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4rem;
    border: 1px solid var(--color-lightgray);
    border-radius: 1rem;
    z-index: -1;
    ${media.greaterThan("medium")`
      display: none;
    `};
  }
`;

const InputArea = styled.div`
  flex: 1 1 0;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.75rem 0;
  ${media.lessThan("medium")`
    height: fit-content;
  `};
`;

const Name = styled.div`
  margin: 0 1rem;
  font-size: 0.8rem;
  color: var(--color-darkgray);
  flex: 0 0 1;
`;

const Divider = styled.div`
  min-width: 1px;
  background-color: var(--color-lightgray);
  width: 1px;
  border-radius: 1px;
  margin: 0.75rem 0;
`;
const SearchBarInput = ({name}) => {
    return (
        <InputWrapper>
            <div className="bg"/>
            <InputArea>
                <Name>{name}</Name>
            </InputArea>
            <Divider className="divider" />
        </InputWrapper>
    );
};

export default SearchBarInput;
