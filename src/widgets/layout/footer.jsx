import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";


export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, made {" "}
          by{" "}
          <a
            href='#'

            className="transition-colors hover:text-blue-500 font-bold"
          >
            Group-16
          </a>{" "}
          for a better web.
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Creative Tim",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "Yash Ladekar", path: "https://github.com/yashladekar" },
    { name: "Vaibhav Bhatkare", path: "https://github.com/vaibhavbhatkare" },
    { name: "Rahul Mahajan", path: "https://github.com/rahulmahajan000" },
    { name: "Abhiest Yadav", path: "https://github.com/abhiestyadav" }
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
