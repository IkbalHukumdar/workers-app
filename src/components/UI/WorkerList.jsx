import Card from "./Card";

const WorkerList = (props) => {
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş₺</span>
        </li>
        {props.workers.map((worker) => (
          <li>
            className="flex justify-between cursor-pointer hover:shadow-xl p-2
            transition-shadow" <span>İkbal Hükümdar</span>
            <span className="text-teal-700 font-medium">20.000</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
