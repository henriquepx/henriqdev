import LanguageSkill from '../components/LanguageSkill'
import TabFiles from './Layout/TabFiles'
import styled, {keyframes} from 'styled-components'
import Angular from '../assets/skills/angular.png'
import Bootstrap from '../assets/skills/bootstrap.png'
import Css from '../assets/skills/css.png'
import HTML from '../assets/skills/html.png'
import Javascript from '../assets/skills/javascript.png'
import Nodejs from '../assets/skills/nodejs.png'
import React from '../assets/skills/react.png'
import Sass from '../assets/skills/sass.png'
import SQL from '../assets/skills/sql.png'
import MySQL from '../assets/skills/mysql.png'
import StyledComponents from '../assets/skills/styledcomponents.png'
import Tailwind from '../assets/skills/tailwind.png'
import Typescript from '../assets/skills/typescript.png'
import NextJS from '../assets/skills/next.png'
import ReactNative from '../assets/skills/reactnative.png'
import { useTranslation } from "react-i18next";

const showingContent = keyframes`
    0% {
        opacity: 0;
        transform: translateX(30px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
`;
const SkillsContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden; 
`
const SkillsSize = styled.div`
    overflow-y: auto;
    width: 100%;
    margin: 0 auto;
    height: 87%;
    margin: 1rem 0;
    @media (max-width: 500px) {
        margin: 1rem 0;
    }
    animation: ${showingContent} 1s forwards;
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
`
const SkillsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 55px;
    padding: 0 .8rem;
`
const SkillsWrap2 = styled(SkillsWrap)`
    padding-bottom: 6rem;
`
const LearningSkills = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin: 4rem 0rem 1rem 0rem;
    color: white;
    font-weight: 610;
    margin-left: 55px;
    padding-left: 1rem;
`
const SkillAdjustSize = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 9rem 0rem 3rem 0rem;
    @media (max-width: 500px) {
        padding: 2.5rem 0rem 0rem 0rem;
    }
 `

const Skills = () => {
    const { t } = useTranslation();

    return (
        <SkillsContainer>
            <TabFiles activeTab='Skills' />
            <h1>Skills</h1>
            <SkillsSize>
                <SkillAdjustSize>
                    <SkillsWrap>
                        <LanguageSkill
                            icon={React} 
                            title="React" 
                            description={t("skills.reactDescription")}
                        />
                        <LanguageSkill
                            icon={ReactNative} 
                            title="React Native" 
                            description={t("skills.reactNativeDescription")}
                        />
                        <LanguageSkill
                            icon={Javascript}
                            title="JavaScript" 
                            description={t("skills.javascriptDescription")}
                        />
                        <LanguageSkill
                            icon={Typescript}
                            title="TypeScript" 
                            description={t("skills.typescriptDescription")}
                        />
                        <LanguageSkill
                            icon={SQL} 
                            title="SQL" 
                            description={t("skills.sqlDescription")}
                        />
                         <LanguageSkill
                            icon={MySQL} 
                            title="MySQL" 
                            description={t("skills.mysqlDescription")}
                        />
                        <LanguageSkill
                            icon={StyledComponents}
                            title="Styled Components" 
                            description={t("skills.styledcomponentsDescription")}
                        />
                        <LanguageSkill
                            icon={Sass}
                            title="Sass" 
                            description={t("skills.sassDescription")}
                        />
                        <LanguageSkill
                            icon={Tailwind}
                            title="Tailwind" 
                            description={t("skills.tailwindDescription")}
                        />
                        <LanguageSkill
                            icon={Bootstrap}
                            title="Bootstrap" 
                            description={t("skills.bootstrapDescription")}
                        />
                        <LanguageSkill
                            icon={Css}
                            title="CSS" 
                            description={t("skills.cssDescription")}
                        />
                        <LanguageSkill
                            icon={HTML}
                            title="HTML" 
                            description={t("skills.htmlDescription")}
                            />
                        </SkillsWrap>
                        <LearningSkills>{t("skills.studyingandlearningTitle")}</LearningSkills>
                        <SkillsWrap2>
                            <LanguageSkill
                                icon={Angular}
                                title="Angular" 
                                description={t("skills.angularDescription")}
                            />
                            <LanguageSkill
                                icon={Nodejs}
                                title="NodeJS" 
                                description={t("skills.nodeDescription")}
                                />
                            <LanguageSkill
                                icon={NextJS}
                                title="NextJS"
                                description={t("skills.nextDescription")}
                            />
                        </SkillsWrap2>
                </SkillAdjustSize>
           </SkillsSize>
        </SkillsContainer>
    )
}

export default Skills