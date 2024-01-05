import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title" id="about-project">О проекте</h2>
            <div className="about-project__text">
                <div className="about-project__text-column">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__text-column">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <table className="about-project__duration">
                <tbody>
                    <tr className="about-project__row">
                        <th className="about-project__col about-project__col_painted">1 неделя</th>
                        <th className="about-project__col about-project__col_painted">4 недели</th>
                    </tr>
                    <tr className="about-project__row">
                        <th className="about-project__col">Back-end</th>
                        <th className="about-project__col">Front-end</th>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default AboutProject;