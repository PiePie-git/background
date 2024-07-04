import "./Member.scss";
import memberList from "@/constants/conMemberList";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Tag, Table, Checkbox, Card } from "antd";
import Highlighter from "react-highlight-words";

const Member = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, confirm, dataIndex) => {
    clearFilters();
    confirm();
    setSearchText("");
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm, dataIndex)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const memberTable = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        {
          text: "Male",
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      onFilter: (value, record) => record.gender.includes(value),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      filters: [
        {
          text: "loyal",
          value: "loyal",
        },
        {
          text: "occasional",
          value: "occasional",
        },
        {
          text: "regular",
          value: "regular",
        },
        {
          text: "premium",
          value: "premium",
        },
        {
          text: "basic",
          value: "basic",
        },
      ],
      onFilter: (value, record) => record.tags.includes(value),
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            const color = {
              loyal: "green",
              occasional: "geekblue",
              regular: "volcano",
              premium: "yellow",
              basic: "blue",
            };
            return (
              <Tag color={color[tag]} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) => <span>{value ? "Enable" : "Disable"}</span>,
      filters: [
        {
          text: "Enable",
          value: true,
        },
        {
          text: "Disable",
          value: false,
        },
      ],
      onFilter: (value, record) => record.status == value,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
  };

  const defaultCheckedList = memberTable.map((item) => item.key);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const options = memberTable.map(({ key, title }) => ({
    label: title,
    value: key,
  }));
  const newMemberTable = memberTable.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));

  return (
    <div className="member member__content">
      <Card>
        <Checkbox.Group
          value={checkedList}
          options={options}
          onChange={(value) => {
            setCheckedList(value);
          }}
        />
      </Card>
      <Card>
        <Table columns={newMemberTable} dataSource={memberList} onChange={handleChange} />
      </Card>
    </div>
  );
};

export default Member;
