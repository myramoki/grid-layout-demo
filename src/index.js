import "./styles.css";

import Layout from "./layout/layout.js";

import HeaderMenus from "./components/HeaderMenus.js";
import NavMenus from "./components/NavMenus.js";

import { pipe } from "rambda";

import Defs from "./defs.js";

// Write Javascript code!
const appDiv = document.getElementById("app");
const write = t => (appDiv.innerHTML += t);

pipe(
  HeaderMenus,
  Layout.Header,
  write
)(Defs.headerMenus);

pipe(
  NavMenus,
  Layout.Nav,
  write
)(Defs.navMenus);

pipe(
  Layout.Aside,
  write
)("");

pipe(
  Layout.Footer,
  write
)("Copyright 2019 Biznuvo");

pipe(
  Layout.Main,
  write
)("Empty content");
