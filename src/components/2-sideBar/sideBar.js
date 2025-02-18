import "./sidebar.css";

const Job = [
  {
    id: 1,
    name: "برمجة",
  },
  { id: 2, name: "محاسبة" },
  {
    id: 3,
    name: "تصميم",
  },
  {
    id: 4,
    name: "برمجة",
  },
  { id: 5, name: "محاسبة" },
  {
    id: 6,
    name: "تصميم",
  },
];

const SideBar = () => {
  return (
    <div className="right_side">
      <h3>انواع الوظائف</h3>
      <ul>
        {Job.map(({ id, name }) => {
          return (
            <li key={id}>
              <a href="/">وظائف {name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
