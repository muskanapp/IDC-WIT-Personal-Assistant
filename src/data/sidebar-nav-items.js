export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Todo",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/todo",
    },
    {
      title: "Meetings",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/meetings",
    },
  ];
}
