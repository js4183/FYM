import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import InputDatalist from "./InputDatalist";
import InputDatepicker from "./InputDatepicker";
import InputTotalNum from "./InputTotalNum";
import SearchBarInput from "./SearchBarInput";

const InputContainer = styled.form`
  margin-bottom: 2rem;
  height: 4rem;
  background-color: var(--color-white);
  border-radius: 1rem;
  display: flex;
  ${media.lessThan("medium")`
    margin-bottom: 1.25rem;
    width: calc(100% - 6rem);
  `}
  ${media.lessThan("small")`
    width: 100%;
    min-width: 20rem;
  `}
`;

const InputList = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  display: flex;
`;
const SearchBar = () => {
    return (
        <InputContainer>
            <InputList>
                <SearchBarInput isSport name="모임">
                    <InputDatalist
                        id="sport"
                        placeholder="어떤 모임인가요?"
                    />
                </SearchBarInput>
                <SearchBarInput name="지역">
                    <InputDatalist
                        id="area"
                        placeholder="지역 입력"
                    />
                </SearchBarInput>
                <SearchBarInput isDate name="날짜">
                    <InputDatepicker
                        id="date"
                        placeholder="날짜 입력"
                    />
                </SearchBarInput>
                <SearchBarInput isTime name="시간">
                    <InputDatalist
                        id="time"
                        placeholder="시간 입력"
                    />
                </SearchBarInput>
                <SearchBarInput name="인원" hideDivider>
                    <InputTotalNum
                        inputId="totalNum"
                        placeholder="인원 입력"
                    />
                </SearchBarInput>
            </InputList>
        </InputContainer>
    );
};

export default SearchBar;
