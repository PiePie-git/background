import "./Product.scss";
import productColumns from "@/constants/conProductColumns";
import productList from "@/constants/conProductList";
import { Table, Card, Space, Input, Button, Flex, Dropdown } from "antd";
import { PlusOutlined, DownOutlined, ImportOutlined } from "@ant-design/icons";
const { Search } = Input;

const Product = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
    },
  };

  const dropdownMenu = {
    items: [
      {
        label: "Import",
        key: "1",
        icon: <ImportOutlined />,
      },
    ],
  };

  const handleDropdownClick = (e) => {
    console.log("click", e);
  };

  return (
    <>
      <div className="product product__content">
        <Card>
          <Flex gap="middle" justify="space-between">
            <Search
              className="product__search"
              placeholder="To search for a product by name or code."
              allowClear
            ></Search>
            <Space size="middle">
              <Button>Import</Button>
              <Dropdown.Button
                icon={<DownOutlined />}
                menu={dropdownMenu}
                onClick={handleDropdownClick}
              >
                <PlusOutlined />
                Add
              </Dropdown.Button>
            </Space>
          </Flex>
        </Card>
        <Card>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={productColumns}
            dataSource={productList}
          />
        </Card>
      </div>
    </>
  );
};

export default Product;
