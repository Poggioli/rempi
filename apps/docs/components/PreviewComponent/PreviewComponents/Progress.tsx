import { Flex } from "@rempi-ui/flex";
import { Progress } from "@rempi-ui/progress";
import { FC, useEffect, useState } from "react";

export const ProgressPreview: FC = () => {

  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((currentValue) => currentValue === 75 ? 25 : 75);
    }, 2000);
    return () => clearTimeout(interval);
  }, []);

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Progress value={progress} />
    </Flex>
  );
};
