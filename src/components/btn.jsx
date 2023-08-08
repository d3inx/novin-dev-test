import { Link } from "react-router-dom";
const Btn = (props) => {
    const {route, text} = props
  return (
    <Link
      to={route}
      className="w-32 h-12 flex items-center justify-center text-xl bg-slate-50 text-slate-900 rounded-xl cursor-pointer"
    >
      {text}
    </Link>
  );
};

export default Btn;
