const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let lessonspassed = 37;
const name = "Eduard Manserov";
let age = 21;
let city = "Kiryat-Yam";
const course = "Full Stack Developer";
const totallessons = 110;
const fragment=<>
<h1 style={{fontWeight: "bold"}}>Мой учебный профиль</h1>
    <p style={{fontSize:"30px"}}>{name}</p>
    <p style={{fontSize:"30px"}}>Возраст {age}</p>
    <p style={{fontSize:"30px"}}>Город {city}</p>
    <p style={{fontSize:"30px"}}>Название курса: {course}</p>
    <p style={{fontSize:"30px"}}>Пройдено занятий - {lessonspassed}</p>
    <p style={{fontSize:"30px"}}>Сколько осталось занятий - {totallessons-lessonspassed}</p>



</>



root.render(fragment);