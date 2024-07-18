import "./Dashboard.scss";
import LineChart from "./LineChart";
import { Card, Input, Flex, Space, Col, Row, Statistic } from "antd";

const DashboardComponent = () => {
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  return (
    <div className="dashboard__content">
      <Card>
        <Flex gap="middle">
          <Space>
            選擇單位：
            <Input />
          </Space>
          <Space>
            選擇日期：
            <Input />
          </Space>
        </Flex>
      </Card>
      <Card>
        <Row>
          <Col className="dashboard__title" span={24}>
            <span>交易情況</span>
          </Col>
          <Col span={6}>
            <Statistic title="今日交易總額" value={27462142} prefix={"$"} />
          </Col>
          <Col span={6}>
            <Statistic title="銷售目標完成率" value={"92%"} />
          </Col>
          <Col span={6}>
            <Countdown title="目標剩餘時間" value={deadline} />
          </Col>
          <Col span={6}>
            <Statistic title="每秒交易總額" value={647} prefix={"$"} />
          </Col>
        </Row>
      </Card>
      <Card>
        <Col className="dashboard__title" span={24}>
          <span>交易情況</span>
        </Col>
        <LineChart />
      </Card>
    </div>
  );
};

export default DashboardComponent;
