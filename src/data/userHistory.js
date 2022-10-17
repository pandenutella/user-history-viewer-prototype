const userHistory = [
  {
    uuid: "1",
    operation: "CREATE",
    updatedResourceImage: {
      id: "U001",
      name: "Use r1",
      deleted: false,
      privileges: [
        {
          group: "A001",
          accessLevel: 1,
        },
      ],
    },
    updateUser: "U002",
    updateDate: "10-14-2022",
  },
  {
    uuid: "2",
    operation: "UPDATE",
    updatedResourceImage: {
      id: "U001",
      name: "User 1",
      deleted: false,
      privileges: [
        {
          group: "A001",
          accessLevel: 2,
        },
      ],
    },
    updateUser: "U003",
    updateDate: "10-15-2022",
  },
  {
    uuid: "3",
    operation: "UPDATE",
    updatedResourceImage: {
      id: "U001",
      name: "User 1",
      deleted: false,
      privileges: [
        {
          group: "A001",
          accessLevel: 2,
        },
        {
          group: "M001",
          accessLevel: 1,
        },
      ],
    },
    updateUser: "U002",
    updateDate: "10-16-2022",
  },
  {
    uuid: "4",
    operation: "DELETE",
    updatedResourceImage: null,
    updateUser: "U002",
    updateDate: "10-17-2022",
  },
];

export default userHistory;
