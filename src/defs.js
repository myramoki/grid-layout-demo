const headerMenusDef = [
  { type: "logo", name: "Company" },
  { type: "menu", name: "Home" },
  { type: "menu", name: "Inbox" },
  { type: "menu", name: "Solutions" },
  { type: "filler" },
  { type: "menu", name: "Settings" }
];

const navMenusDef = [
  {
    type: "group",
    name: "Workspace",
    children: [{ type: "menu", name: "Inbox" }]
  },
  {
    type: "group",
    name: "Foundations",
    children: [
      { type: "menu", name: "Data Dictionary" },
      { type: "menu", name: "Payloads" },
      { type: "menu", name: "Transformations" },
      { type: "menu", name: "Masters" }
    ]
  }
];

export default { headerMenus: headerMenusDef, navMenus: navMenusDef };
