const Deploy = require("ftp-deploy");
const ftpDeploy = new Deploy();

const config = {
  user: "u613160674",
  // Password optional, prompted if none given
  password: "StyvensCamille5959.",
  host: "62.72.37.186",
  port: 21,
  localRoot: __dirname + "/faceSite",
  remoteRoot: "/domains/styvens-wentz.fr/public_html/static/media/projects",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
