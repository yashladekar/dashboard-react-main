import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

export function Tables() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/testing/linkCheck') // replace 'API_URL' with the actual URL of the API
      .then(response => response.json())
      .then(data => setData(data)); // Limit the data to the first 15 items
  }, []);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Links Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2" style={{ maxHeight: '400px', overflowY: 'scroll' }}> {/* Add a specific height and overflow property */}
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["All Links", "Status"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => {
                const className = `py-3 px-5 ${
                  key === data.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={item.link}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {item.link}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Chip
                        variant="gradient"
                        color={item.status === "OK" ? "green" : "red"}
                        value={item.status === "OK" ? "Active" : "InActive"}
                        className="py-0.5 px-2 text-[11px] font-medium w-fit"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
