import { Modal, Table, Tag } from "antd";
import moment from "moment";
import UserHistoryDiffViewer from "./UserHistoryDiffViewer";

const formatDate = (date) => moment(date).format("MMMM DD, YYYY");

const expandable = {
  expandedRowRender: (record) => (
    <UserHistoryDiffViewer
      previous={record.previousResourceImage}
      current={record.resourceImage}
    />
  ),
  rowExpandable: () => true,
  expandRowByClick: true,
};

const getColorByOperation = (operation) => {
  switch (operation) {
    case "CREATE":
      return "green";
    case "UPDATE":
      return "blue";
    case "DELETE":
      return "red";
    default:
      return null;
  }
};

const UserHistoryModal = ({ history, visible, onHide }) => {
  const columns = [
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
      render: (operation) => (
        <Tag color={getColorByOperation(operation)}>{operation}</Tag>
      ),
    },
    {
      title: "Update By",
      dataIndex: "updateUser",
      key: "updateUser",
    },
    {
      title: "Update On",
      dataIndex: "updateDate",
      key: "updateDate",
      render: (updateDate) => formatDate(updateDate),
    },
  ];

  const dataSource = history.map((item, index) => ({
    key: item.uuid,
    operation: item.operation,
    updateUser: item.updateUser,
    updateDate: item.updateDate,
    resourceImage: item.updatedResourceImage,
    previousResourceImage: history[index - 1]?.updatedResourceImage ?? null,
  }));

  return (
    <Modal
      title="User History"
      open={visible}
      oOk={onHide}
      onCancel={onHide}
      footer={null}
      width={900}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        expandable={expandable}
        size="small"
      />
    </Modal>
  );
};

export default UserHistoryModal;
