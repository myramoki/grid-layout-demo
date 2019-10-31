import "./HeaderMenus.css";

import { pipe, map, join } from "rambda";

const renderers = {
  menu(def) {
    return `<menu>${def.name}</menu>`;
  },

  filler() {
    return "<filler>&nbsp;</filler>";
  },

  logo(def) {
    return `<logo>${def.name}</logo>`;
  }
};

const renderMenu = def => {
  if (def.type in renderers) {
    return renderers[def.type](def);
  } else {
    return "";
  }
};

const renderMenus = pipe(
  map(renderMenu),
  join("")
);

export default renderMenus;
