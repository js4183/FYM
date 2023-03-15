import React, { useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin: 4rem 2rem 0rem 2rem;
  * {
    width: 20rem;
    height: 3rem;
    margin: 0.5rem 0rem;
  }
  input {
    height: 2.3rem;
    border: 1px solid var(--color-gray);
    border-radius: 0.4rem;
    :first-of-type {
      margin-top: 1rem;
    }
    :last-of-type {
      margin-bottom: 1rem;
    }
  }
  button {
    color: var(--color-darkgray);
  }
`;

const Logo = styled.img`
  width: calc(5.36 * 2.5rem);
  height: 2.5rem;
`;

const InputContainer = styled.div`
  height: auto;
`;

const Input = styled.input`
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  color: var(--color-black);
  ::placeholder {
    color: var(--color-gray);
  }
`;

const Button = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  min-height: 3rem;
  font-size: 1rem;
  border: 1.5px solid var(--color-maingreen--100);
  * {
    font-size: 0.5rem;
  }
`;

const FlexGuideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-darkgray);
  * {
    display: flex;
    align-items: start;
    :first-child {
      flex: 1.75 0 0;
      justify-content: end;
      padding-right: 1rem;
    }
    :last-child {
      flex: 1 0 0;
      justify-content: start;
      padding-right: 1rem;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  div {
    width: 20rem;
  }
  .kakao {
    width: 10rem;
    height: 3rem;
    border: 1.5px solid #f4da48;
    margin-right: 0.5rem;
    * {
      width: 2.5rem;
      height: auto;
      :first-child {
        margin-right: 0.2rem;
      }
    }
  }
  .google {
    width: 10rem;
    height: 3rem;
    border: 1.5px solid #4384f3;
    * {
      width: 1rem;
      height: auto;
      :first-child {
        margin-right: 0.2rem;
      }
    }
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-red);
  font-size: 0.8rem;
  padding: 0rem 1rem;
  height: 0.5rem;
`;

const VerificationNotice = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

const Signing = () => {
    return (
        <VerificationNotice>

        </VerificationNotice>
    );
};

export default Signing;