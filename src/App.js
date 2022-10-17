import { Card, Col, Layout, Row } from "antd";
import UserTable from "./components/UserTable";
import user from "./data/user";
import userHistory from "./data/userHistory";

const App = () => {
  return (
    <Layout>
      <Layout.Content style={{ minHeight: "100vh" }}>
        <Card title="User Info">
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <UserTable user={user} userHistory={userHistory} />
            </Col>
          </Row>
        </Card>
      </Layout.Content>
    </Layout>
  );
};

export default App;
