import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdArrowOutward } from "react-icons/md";

const ContainerForm = styled.div`
   width: 100%;
`
const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    color: #FFF;
`
const TextareaStyle = styled.textarea`
  color: #fff;
  font-size: 16px;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-bottom: 1px solid rgba(221, 221, 221, 0.39);
  height: 120px;
  &:hover {
    background:#4985e01f;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ .input-border {
    width: 100%;
  }
`
const ButtonSubmitForm = styled.a`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    background-color: #3f3f3f;
    font-size: 1rem;
    margin: 0 auto;
    width: 30%;
    padding: .7rem 1.2rem;
    margin-top: 1.5rem;
    color: #fff;
    font-weight: 600;
    @media (max-width: 500px) {
      width: 100%;
    }
`
const NameEmail = styled.div`
    display: flex;
    gap: 50px;
    margin-bottom: 3rem;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    }
`
const DivForm = styled.div`
  position: relative;
  width: 100%;
`;
const Input = styled.input`
  color: #fff;
  font-size: 16px;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-bottom: 1px solid rgba(221, 221, 221, 0.39);

  &:hover {
    background:#4985e01f;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ .input-border {
    width: 100%;
  }
`;
const InputBorder = styled.span`
  position: absolute;
  background: #5891ff;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  transition: 0.3s;
`;
const LabelInputForm = styled.label`
  margin-bottom: 1rem;
  font-size: .5rem;
  font-style: italic;
`


const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_webqtko', 'template_kxj8ru8', form.current, '6XCPVQDlEI-egjo2f')
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });
  e.target.reset();
  };

  return (
    <ContainerForm>
      <FormStyle ref={form} onSubmit={sendEmail}>
        <NameEmail>
          <DivForm>
            <LabelInputForm htmlFor="user_name">nome</LabelInputForm>
            <Input
              type="text"
              placeholder="Insira seu nome:"
              name="from_name"
              id="user_name"
              required />
            <InputBorder className="input-border" />
          </DivForm>
          <DivForm>
            <LabelInputForm htmlFor="user_email">e-mail</LabelInputForm>
            <Input
              type="text"
              placeholder="Insira seu e-mail:"
              name="reply_to"
              id="user_email"
              required />
            <InputBorder className="input-border" />
          </DivForm>
        </NameEmail>
          <DivForm>
            <LabelInputForm htmlFor="message">mensagem</LabelInputForm>
            <TextareaStyle 
              placeholder="Olá, Henrique. Gostei muito do seu portfólio e tenho um projeto que gostaria da sua contribuição. Vamos conversar?"
              name="message"
              id="message"
            />
          </DivForm>
        <ButtonSubmitForm type="submit" value="Send">Enviar <MdArrowOutward size={20}/></ButtonSubmitForm>
      </FormStyle>
    </ContainerForm>
  );
}

export default Form;