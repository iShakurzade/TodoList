import style from "./Landing.module.scss";

const Landing = () => {
    return (
        <div className={style.landing}>
            <h1>Приложение для управления задачами</h1>
            <p>
Наше веб-приложение - это инструмент, разработанный для удобного создания и управления задачами. Он предоставляет пользователям простой и интуитивно понятный интерфейс для создания задач, каждая из которых содержит заголовок и текст. Но это еще не все – мы идем дальше, чтобы сделать ваш опыт управления задачами еще более удобным и эффективным.
            </p>
        </div>
    );
};

export default Landing;
