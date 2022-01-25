export default {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
    name: "name",
    type: "string",
  },
  {
    title: "Aproved",
    name: "approved",
    type: "boolean",
    description: "Commments won't show on the site without approval",
  },
  {
    name: "email",
    type: "string",
  },
  {
    name: "comment",
    type: "text",
  },
  {
    name: "post",
    type: "reference",
    to: [{ type: "post" }],
  },
]
}