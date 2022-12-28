import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export const dataContact = [
  {
    id: 1,
    icon: <EmailOutlinedIcon />,
    title: `Email`,
    url: `nrgbek@icloud.com`,
    type: "mailto:nrgbek@icloud.com",
  },
  {
    id: 2,
    icon: <SmartphoneIcon />,
    title: `Phone`,
    type: "tel:+998972343407",
    url: "+998 98 130 88 66",
  },
  {
    id: 3,
    icon: <CalendarMonthOutlinedIcon />,
    title: `Birthday`,
    url: `December 08, 2001 `,
  },
  {
    id: 4,
    icon: <LocationOnOutlinedIcon />,
    title: `Location`,
    url: `Uzbekistan, Andijan `,
  },
];

export const dataLinks = [
  {
    id: 1,
    app: <TelegramIcon />,
    url: "https://xn--80affa3aj0al.xn--80asehdb/",
  },
  {
    id: 1,
    app: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/behzodbek-tursunboyev-825743249/",
  },
  {
    id: 2,
    app: <GitHubIcon />,
    url: "https://github.com/Begi2001",
  },
  {
    id: 3,
    app: <InstagramIcon />,
    url: "https://www.instagram.com",
  },
];
