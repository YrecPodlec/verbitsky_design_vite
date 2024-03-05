import React from "react";
import styles from './ButtonAboutMe.module.scss'
interface ButtonAboutMe{
    question: string,
    AboutMeData: string
}
const ButtonAboutMe_bones: React.FC<ButtonAboutMe> = ({question, AboutMeData}) => {
    return (
        <div className={styles.ButtonAboutMe}>
            <h1>
                {question}
            </h1>
            <div>
                {AboutMeData}
            </div>
        </div>
    );
};

export default ButtonAboutMe_bones;