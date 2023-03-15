import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import SearchInput from "./SearchInput";
import InputDatepicker from "./InputDatepicker";
import InputDatalist from "./InputDatalist";
import InputTotalNum from "./InputTotalNum";

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
  .gath-search-btn {
    width: 100%;
    height: 100%;
    background-color: var(--color-maingreen--75);
    color: var(--color-white);
  }
  .gath-search-btn.pc {
    padding: 0;
    border-radius: 0.6rem;
  }
  .gath-search-btn.mobile {
    width: 100%;
    ${media.lessThan("small")`
      min-width: 20rem;
      height: 3.2rem;
    `}
  }
`;

const InputList = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  display: flex;
`;

const HomeSearchBar = () => {
    return (
        <InputContainer>
            <InputList className="pc">
                <SearchInput isSport name="운동" htmlFor="sport">
                    <InputDatalist
                        id="sport"
                        placeholder="어떤 운동하세요?"
                    />
                </SearchInput>
                <SearchInput name="지역" htmlFor="area">
                    <InputDatalist
                        id="area"
                        placeholder="지역 입력"
                    />
                </SearchInput>
                <SearchInput isDate name="날짜" htmlFor="date">
                    <InputDatepicker
                        id="date"
                        placeholder="날짜 입력"
                    />
                </SearchInput>
                <SearchInput isTime name="시간" htmlFor="time">
                    <InputDatalist
                        id="time"
                        placeholder="시간 입력"
                    />
                </SearchInput>
                <SearchInput name="인원" htmlFor="totalNum" hideDivider>
                    <InputTotalNum
                        inputId="totalNum"
                        placeholder="인원 입력"
                    />
                </SearchInput>
            </InputList>
        </InputContainer>
    );
};

export default HomeSearchBar;
