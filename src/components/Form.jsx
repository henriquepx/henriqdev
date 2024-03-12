import styled from 'styled-components';

const ContainerForm = styled.div`
   width: 100%;
   background-color: #2e2e2e; /* Cor do background */
`

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    color: #fff; /* Cor da fonte */
`

const LabelForm = styled.label`
    margin-bottom: 7px;
    font-family: 'Montserrat', monospace;
    color: #fff; /* Cor da fonte */
`

const InputStyle = styled.input`
    margin-bottom: 14px;
    border-radius: 4px;
    height: 40px;
    color: #fff;
    width: 100%; 
    padding: 15px 8px;
    font-family: 'Montserrat', monospace;
    background-color: transparent;
    border: 1px solid #fff; /* Cor da borda */
`

const TextareaStyle = styled.textarea`
    margin-bottom: 14px;
    border-radius: 4px;
    font-family: 'Montserrat', monospace;
    border: 0;
    padding: 8px;
    background-color: transparent;
    border: 1px solid #fff; /* Cor da borda */
    height: 200px;
    width: 100%;
    color: #fff;
    resize: none;
`

const ButtonSubmitForm = styled.button`
    height: 34px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    background-color: #181818; /* Cor do header, footer e aside */
    font-size: 1rem;
    margin: 0 auto;
    width: 30%;
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
            <FormStyle>
                <NameEmail>
                    <EveryInput>
                        <LabelForm htmlFor="user_name">Nome</LabelForm>
                        <InputStyle 
                            type="text"
                            placeholder="Digite seu nome"
                            name="from_name"
                            id="user_name"
                        />
                    </EveryInput>
                    <EveryInput>
                    <LabelForm htmlFor="user_email">E-mail:</LabelForm>
                    <InputStyle 
                        type="text"
                        placeholder="Digite seu e-mail"
                        name="reply_to"
                        id="user_email"
                    />
                    </EveryInput>
                </NameEmail>
                <LabelForm htmlFor="message">Mensagem</LabelForm>
                <TextareaStyle 
                    placeholder="Deixe sua mensagem"
                    name="message"
                    id="message"
                />

                <ButtonSubmitForm type="submit" value="Send">Enviar</ButtonSubmitForm>
            </FormStyle>
        </ContainerForm>
    );
}

export default Form;
