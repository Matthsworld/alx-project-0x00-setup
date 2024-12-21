import Card from "@/components/Card";
import Button from "@/components/Button";

<div className="p-4 flex flex-col gap-4">
  <h1 className="text-2xl font-bold">Buttons</h1>
  <Button title="Small Rounded" styles="text-sm rounded-sm bg-blue-500 text-white" />
  <Button title="Medium Rounded-md" styles="text-md rounded-md bg-green-500 text-white" />
  <Button title="Large Rounded-full" styles="text-lg rounded-full bg-red-500 text-white" />
</div>

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <h1>Welcome to the Landing Page</h1>
<Card />
<Card />
<Card />

    </div>
  );
};

export default Landing;

