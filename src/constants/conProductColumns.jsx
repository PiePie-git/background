import { Tag, Space, Image, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const tagTextMap = {
  PROMO: "Promotion",
  BEST_SELLER: "Best Seller",
  DISCOUNT: "Discount",
  PRE_ORDER: "Pre Order",
  FAST_SHIPPING: "Fast Shipping",
  FREE_SHIPPING: "Free Shipping",
  MEMBER_EXCLUSIVE: "Member Exclusive",
};

const productColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <Space>
        <Image
          src={record.img}
          alt={record.name}
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        ></Image>
        <a href={record.url}>{record.name}</a>
      </Space>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    filters: [
      {
        text: tagTextMap["PROMO"],
        value: "PROMO",
      },
      {
        text: tagTextMap["BEST_SELLER"],
        value: "BEST_SELLER",
      },
      {
        text: tagTextMap["DISCOUNT"],
        value: "DISCOUNT",
      },
      {
        text: tagTextMap["PRE_ORDER"],
        value: "PRE_ORDER",
      },
      {
        text: tagTextMap["FAST_SHIPPING"],
        value: "FAST_SHIPPING",
      },
      {
        text: tagTextMap["FREE_SHIPPING"],
        value: "FREE_SHIPPING",
      },
      {
        text: tagTextMap["MEMBER_EXCLUSIVE"],
        value: "MEMBER_EXCLUSIVE",
      },
    ],
    onFilter: (value, record) => record.tags.includes(value),
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          const color = {
            PROMO: "blue",
            BEST_SELLER: "green",
            DISCOUNT: "red",
            PRE_ORDER: "orange",
            FAST_SHIPPING: "purple",
            FREE_SHIPPING: "gold",
            MEMBER_EXCLUSIVE: "cyan",
          };
          return (
            <Tag color={color[tag]} key={tag}>
              {tagTextMap[tag]}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Status",
    key: "status",
    filters: [
      {
        text: "Online Store Online",
        value: JSON.stringify({
          type: "online",
          status: true,
        }),
      },
      {
        text: "Online Store Offline",
        value: JSON.stringify({
          type: "online",
          status: false,
        }),
      },
      {
        text: "Physical Store Online",
        value: JSON.stringify({
          type: "physical",
          status: true,
        }),
      },
      {
        text: "Physical Store Offline",
        value: JSON.stringify({
          type: "physical",
          status: false,
        }),
      },
    ],
    onFilter: (value, record) => {
      const filterValue = JSON.parse(value);
      if (filterValue.type === "online") {
        return record.onlineStatus === filterValue.status;
      }
      if (filterValue.type === "physical") {
        return record.physicalStatus === filterValue.status;
      }
      return false;
    },
    render: (_, record) => {
      const onlineText = record.onlineStatus ? "Online" : "Offline";
      const physicalText = record.physicalStatus ? "Online" : "Offline";

      return (
        <div>
          <div>
            <Tag color={record.onlineStatus ? "geekblue" : "cyan"}>Online Store: {onlineText}</Tag>
          </div>
          <div>
            <Tag color={record.physicalStatus ? "geekblue" : "cyan"}>
              Physical Store: {physicalText}
            </Tag>
          </div>
        </div>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button type="text" icon={<EditOutlined />} />
        <Button type="text" icon={<DeleteOutlined />} />
      </Space>
    ),
  },
];

export default productColumns;
