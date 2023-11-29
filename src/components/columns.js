export const COLUMNS = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    Footer: "Phone Number",
    accessor: "",
  },
  {
    Header: "Address",
    accessor: "",
  },
];

export const GROUPED_COLUMNA = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        Footer: "Phone Number",
        accessor: "",
      },
      {
        Header: "Address",
        accessor: "",
      },
    ],
  },
];
