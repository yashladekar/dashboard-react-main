import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';
import { TrophyIcon } from "@heroicons/react/24/solid";

export function Profile() {
  // Use the Dicebear API to generate an avatar
  const avatarSvg = createAvatar(identicon, {
    // ... options
    randomizeIds: true,backgroundColor: ["b6e3f4","c0aede","d1d4f9"]
  });

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={`data:image/svg+xml;utf8,${encodeURIComponent(avatarSvg)}`} // Use the Dicebear SVG here
                alt="avatar"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Richard Davis
                </Typography>
              </div>
            </div>
          </div>
        </CardBody>
        
      </Card>
    </>
  );
}

export default Profile;
