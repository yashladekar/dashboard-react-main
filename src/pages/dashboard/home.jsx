import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3005/testing/images')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Define the data for the StatisticsCard components
  const statisticsCardsData = data ? [
    {
      icon: CheckCircleIcon,
      title: 'Test Status',
      amount: data.message,
      footer: {
        color: 'text-emerald-500',
        value: 'Completed',
        label: 'Test Status',
      },
    },
    {
      icon: CheckCircleIcon,
      title: 'Loaded Images',
      amount: data.loadedImages,
      footer: {
        color: 'text-emerald-500',
        value: data.loadedImages,
        label: 'Number of Images Loaded',
      },
    },
    {
      icon: CheckCircleIcon,
      title: 'Failed Images',
      amount: data.failedImages,
      footer: {
        color: 'text-emerald-500',
        value: data.failedImages,
        label: 'Number of Images Failed',
      },
    },
  ] : [];

  return (
    <div className="mt-12">
      <Typography className="font-bold text-black-gray-400 mb-3  "> 
         <h1>IMAGES</h1>
      </Typography>  
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>

                 {" "+footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                 {props.footer}
              </Typography>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
