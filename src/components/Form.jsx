import styled from 'styled-components';

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
const InputStyle = styled.input`
    margin-bottom: 14px;
    border-radius: 4px;
    height: 40px;
    color: #fff;
    width: 100%; 
    padding: 15px 8px;
    font-family: 'Montserrat', monospace;
    background-color: #242323;
    border: 1px solid #1d1d1d;
    &:focus {
        outline: none;
    }
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
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 0px;
    }
`
const EveryInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Form = () => {

    return (
        <ContainerForm>
            <FormStyle >
                <NameEmail>
                    <EveryInput>
                        <LabelForm htmlFor="user_name">Nome</LabelForm>
                        <InputStyle 
                            type="text"
                            placeholder="Insira seu nome:"
                            name="from_name"
                            id="user_name"
                        />
                    </EveryInput>
                    <EveryInput>
                    <LabelForm htmlFor="user_email">E-mail:</LabelForm>
                    <InputStyle 
                        type="text"
                        placeholder="Email"
                        name="reply_to"
                        id="user_email"
                    />
                    </EveryInput>
                </NameEmail>
                <LabelForm htmlFor="message">Mensagem:</LabelForm>
                <TextareaStyle 
                    placeholder="Insira sua mensagem"
                    name="message"
                    id="message"
                />

                <ButtonSubmitForm type="submit" value="Send">Enviar</ButtonSubmitForm>
            </FormStyle>
        </ContainerForm>
    );
}

export default Form;