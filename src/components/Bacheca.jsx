//import PrezziBovini from "./ComponentsBacheca/PrezziBovini";
import PrezziLatte from "./ComponentsBacheca/PrezziLatte";
import PrezziOvini from "./ComponentsBacheca/PrezziOvini";
import PrezziSuini from "./ComponentsBacheca/PrezziSuini";

const Bacheca = () => {
  return (
    <div className="mt-5">
      <PrezziLatte />
      <PrezziOvini />
      <PrezziSuini />
      {/*  <PrezziBovini /> */}
    </div>
  );
};

export default Bacheca;
