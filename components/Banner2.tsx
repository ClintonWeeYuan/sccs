import { FC } from "react";

const Banner2: FC = () => {
  return (
    <div className="p-6">
      <div className="w-full flex flex-col items-center py-10">
        <div className="h-4 w-1/2  bg-primary"></div>
        <h1 className="text-4xl font-bold py-10 px-4 lg:px-10 font-serif text-center">
          We are families helping families
        </h1>
        <div className="h-4 w-1/2 bg-primary"></div>
      </div>

      <div>
        <h1 className="text-accent text-2xl mb-2 font-bold">
          Help Us to Help Kids Fight Cancer
        </h1>
        <p>
          Every 5 days, a child in Sarawak is diagnosed with cancer. Childhood
          cancer can be curable, but the journey is not an easy one. <br />
          <br />
          The Sarawak Children’s Cancer Society (SCCS) helps these children and
          their families through much-needed support services, all of which are
          possible through funds from the public. <br />
          <br />
          Join us in our mission to provide relief and care for childhood cancer
          patients
        </p>
      </div>
    </div>
  );
};

export default Banner2;
