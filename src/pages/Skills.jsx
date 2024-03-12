import LanguageSkill from '../components/LanguageSkill'
import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'
import Angular from '../assets/skills/angular.png'
import Bootstrap from '../assets/skills/bootstrap.png'
import Css from '../assets/skills/css.png'
import HTML from '../assets/skills/html.png'
import Javascript from '../assets/skills/javascript.png'
import Nodejs from '../assets/skills/nodejs.png'
import React from '../assets/skills/react.png'
import Sass from '../assets/skills/sass.png'
import SQL from '../assets/skills/sql.png'
import StyledComponents from '../assets/skills/styledcomponents.png'
import Tailwind from '../assets/skills/tailwind.png'
import Typescript from '../assets/skills/typescript.png'

const SkillsContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden; 
    @media (max-width: 800px) {
        padding: .5rem;
    }
`
const SkillsSize = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    overflow-y: auto; 
    max-height: calc(100vh - 6.3rem); 


    &::-webkit-scrollbar {
        width: 12px; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: #505050; 
        border-radius: 6px; 
    }

    &::-webkit-scrollbar-track {
        background-color: #1d1d1d;
    }

    scrollbar-width: thin;
    scrollbar-color: #9c9c9c #1d1d1d;

    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    @media (max-width: 800px) {
        margin-top: 4rem;
        padding-bottom: 10rem;
    }
`
const SkillsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-left: 55px;

`
const LearningSkills = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin: 4rem 0rem 1rem 0rem;
    color: white;
    font-weight: 610;
    margin-left: 55px;
`
 const TextAboutSkills = styled.div`
     padding: 1rem;
     margin: 3rem 2rem 0rem 4rem;
     background-color: #1d1d1d;
     max-width: 720px;
     h3 {
         font-family: 'Montserrat', sans-serif;
         font-size: .9rem;
         color: white;
     }
     p {
         font-family: 'Montserrat', sans-serif;
         font-size: .8rem;
         color: #8a8a8a;
         margin-top: 10px;
     }
 `

const Skills = () => {
    return (
        <SkillsContainer>
            <TabFiles activeTab='Skills' />
            <h1>Skills</h1>
            <SkillsSize>
               <SkillsWrap>
                   <LanguageSkill
                       icon={React} 
                       title="React" 
                       description="Biblioteca de interfaces interativas."
                   />
                   <LanguageSkill
                       icon={Javascript}
                       title="JavaScript" 
                       description="Linguagem para desenvolvimento web."
                    />
                    <LanguageSkill
                       icon={Typescript}
                       title="TypeScript" 
                       description="Superset do JavaScript."
                     />
                   <LanguageSkill
                       icon={StyledComponents}
                       title="Styled Components" 
                       description="Estilização de componentes."
                   />
                   <LanguageSkill
                       icon={Sass}
                       title="Sass" 
                       description="Pré-processador de estilos."
                   />
                   <LanguageSkill
                       icon={Tailwind}
                       title="Tailwind" 
                       description="Framework CSS utilitário."
                   />
                   <LanguageSkill
                       icon={Bootstrap}
                       title="Bootstrap" 
                       description="Framework CSS responsivo."
                   />
                   <LanguageSkill
                       icon={Css}
                       title="CSS" 
                       description="Estilização de páginas."
                   />
                   <LanguageSkill
                       icon={HTML}
                       title="HTML" 
                       description="Marcação de páginas web."
                     />
                     <LanguageSkill
                       icon={SQL} 
                       title="SQL" 
                       description="Gerenciamento de Dados Relacionais."
                   />
               </SkillsWrap>
               <LearningSkills>Estudando & aprendendo</LearningSkills>
               <SkillsWrap>
                   <LanguageSkill
                       icon={Angular}
                       title="Angular" 
                       description="Framework escalável."
                   />
                   <LanguageSkill
                       icon={Nodejs}
                       title="NodeJS" 
                       description="Ambiente de Servidor JavaScript."
                   />
               </SkillsWrap>
                <TextAboutSkills>
                   <h3>Planos pro futuro.</h3>
                   <p>Atualmente, meu foco principal é no desenvolvimento front-end. Acredito que a experiência do usuário é fundamental, e estou empenhado em criar interfaces de usuário atraentes e intuitivas que proporcionem uma ótima experiência aos usuários finais.</p>
                   <p>Além disso, estou sempre em busca de aprendizado contínuo. Estou explorando novas tecnologias, como TypeScript e Angular, para expandir ainda mais meu conjunto de habilidades e abraçar desafios mais amplos no futuro.</p>
                   <p>Meu objetivo final é me tornar um desenvolvedor Fullstack, mas estou ciente da importância de construir uma base sólida no front-end antes de prosseguir para o back-end. Estou comprometido em me manter atualizado com as últimas tendências e melhores práticas do setor, para que eu possa contribuir de maneira significativa para projetos empolgantes e desafiadores.</p>
               </TextAboutSkills>
           </SkillsSize>
        </SkillsContainer>
    )
}

export default Skills