import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 145rem;
  min-height: 80rem;
  overflow: hidden;
  padding-bottom: 6rem;
  background: #181818;
`

export const FormWrapper = styled.form`
  max-width: 50rem;
  width: 100%;
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.8rem;
`

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: .9rem 1rem .9rem 1rem;
  border: none;
  box-sizing: border-box;
  border-radius: 2px;
  transition: all .2s ease;
  background: #f2f2f2;

  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  color: #f2f2f2;
`

export const TextAreaWrapper = styled.div`
  width: 100%;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 35rem;
  padding: .9rem 1rem .9rem 1rem;
  border-radius: 3px;
  transition: all .2s ease;
  background: #f2f2f2;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

export const Button = styled.button`
  max-width: 13rem;
  width: 100%;
  border: none;
  padding: 1rem 1rem;
  margin-top: 1rem;
  border-radius: 15px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  color: #f2f2f2;
  transition: all .5s ease-in-out;
  background-color: #FFC149;

  &:hover {
    background-color: #E89A38;
  }
`;