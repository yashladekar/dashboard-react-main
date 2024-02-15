import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function XssComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3005/testing/xss')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="border border-blue-gray-100 shadow-sm rounded-lg">
        
      {/* <CardHeader
        variant="gradient"
        color="blue"
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center rounded-full"
      >
        <CheckCircleIcon className="w-6 h-6 text-white" />
      </CardHeader> */}
      <CardBody className="p-4 ">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          URL
        </Typography>
        <Typography variant="h4" color="blue-gray" className="font-bold">
          {data.url}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600 mt-2">
          Is Vulnerable
        </Typography>
        <Typography variant="h4" color="blue-gray" className="font-bold">
          {data.isVulnerable ? 'Yes' : 'No'}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default XssComponent;
