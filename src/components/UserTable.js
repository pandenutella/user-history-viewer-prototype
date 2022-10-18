import { HistoryOutlined } from "@ant-design/icons";
import { Button, Checkbox, Table, Tag, Tooltip } from "antd";
import moment from "moment";
import { useState } from "react";
import UserHistoryModal from "./UserHistoryModal";

const formatDate = (date) => moment(date).format("MMMM DD, YYYY");

const mapToDataSource = (user, userHistory) => {
  const latestHistory = userHistory[userHistory.length - 1];

  return {
    key: user.id,
    id: user.id,
    name: user.name,
    deleted: user.deleted,
    privileges: user.privileges,
    lastUpdateUser: latestHistory.updateUser,
    lastUpdateDate: latestHistory.updateDate,
  };
};

const UserTable = ({ user, userHistory }) => {
  const [historyVisible, setHistoryVisible] = useState(false);

  const handleViewHistory = () => {
    setHistoryVisible(true);
  };

  const handleHideHistory = () => {
    setHistoryVisible(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Deleted",
      dataIndex: "deleted",
      key: "deleted",
      render: (deleted) => <Checkbox checked={deleted} disabled />,
    },
    {
      title: "Privileges",
      dataIndex: "privileges",
      key: "privileges",
      render: (privileges, record) =>
        privileges.map((privilege) => {
          const color = privilege.accessLevel === 1 ? "green" : "red";

          return (
            <Tag key={`${record.id}_${privilege.group}`} color={color}>
              {privilege.group}
            </Tag>
          );
        }),
    },
    {
      title: "Last Updated By",
      dataIndex: "lastUpdateUser",
      key: "lastUpdateUser",
    },
    {
      title: "Last Updated On",
      dataIndex: "lastUpdateDate",
      key: "lastUpdateDate",
      render: (lastUpdateDate) => formatDate(lastUpdateDate),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Tooltip title="View History">
          <Button icon={<HistoryOutlined />} onClick={handleViewHistory} />
        </Tooltip>
      ),
    },
  ];
  const dataSource = user ? [mapToDataSource(user, userHistory)] : [];

  return (
    <>
      <Table columns={columns} dataSource={dataSource} size="small" />
      <UserHistoryModal
        history={userHistory}
        visible={historyVisible}
        onHide={handleHideHistory}
      />
    </>
  );
};

export default UserTable;
