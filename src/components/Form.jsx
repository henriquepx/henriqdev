import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdArrowOutward } from "react-icons/md";

const ContainerForm = styled.div`
   width: 100%;
`
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    color: #FFF;
`
const LabelForm = styled.label`
    margin-bottom: 7px;
    font-family: 'Montserrat', monospace;
`
const TextareaStyle = styled.textarea`
    margin-bottom: 14px;
    border-radius: 4px;
    font-family: 'Montserrat', monospace;
    border: 0;
    padding: 8px;
    background-color: #242323;
    border: 1px solid #1d1d1d;
    height: 200px;
    width: 100%;
    color: #fff;
    resize: none;
    &:focus {
        outline: none;
    }
`
const ButtonSubmitForm = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    background-color: #3f3f3f;
    font-size: 1rem;
    margin: 0 auto;
    width: 100%;
    color: #fff;
    font-family: 'Montserrat', monospace;
`
const NameEmail = styled.div`
    display: flex;
    gap: 50px;
    margin-bottom: 3rem;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 0px;
    }
`
const DivForm = styled.div`
  position: relative;
  width: 100%;
`;
const Input = styled.input`
  color: #fff;
  font-size: 0.9rem;
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
                        <Input
                            type="text"
                            placeholder="Insira seu nome:"
                            name="from_name"
                            id="user_name"
                            required />
                        <InputBorder className="input-border" />
                    </DivForm>

                    <DivForm>
                        <Input
                            type="text"
                            placeholder="Insira seu e-mail:"
                            name="reply_to"
                            id="user_email"
                            required />
                        <InputBorder className="input-border" />
                    </DivForm>
                </NameEmail>

                <LabelForm htmlFor="message">Mensagem:</LabelForm>
                <TextareaStyle 
                    placeholder="Insira sua mensagem"
                    name="message"
                    id="message"
                />

                <ButtonSubmitForm type="submit" value="Send">Enviar <MdArrowOutward /></ButtonSubmitForm>
            </FormStyle>
        </ContainerForm>
    );
}

export default Form;