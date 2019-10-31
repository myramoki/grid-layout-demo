import "./NavMenus.css";

import { pipe, map, join } from "rambda";

const renderers = {
  menu(def) {
    return `<menu>${def.name}</menu>`;
  },

  filler() {
    return "<filler>&nbsp;</filler>";
  },

  group(def) {
    return `<menugroup><lbl>${def.name}</lbl>${renderMenus(
      def.children
    )}</menugroup>`;
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
