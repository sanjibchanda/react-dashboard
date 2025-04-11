import React from "react";
import Button from "../components/Button";

const ButtonLayout = () => {
  return (
    <>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Reusable Button Component</h4>
        <Button>Default</Button>
        <Button variant="primary" size="sm">
          primary
        </Button>
        <Button variant="secondary" size="lg">
          secondary
        </Button>
        <Button variant="danger">danger</Button>
      </div>
    </>
  );
};

export default ButtonLayout;
