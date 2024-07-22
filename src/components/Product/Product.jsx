import "./Product.scss";
import productColumns from "@/constants/conProductColumns";
import productList from "@/constants/conProductList";
import { Table, Card, Space, Input, Flex, Dropdown, Modal } from "antd";
import { PlusOutlined, DownOutlined, ImportOutlined } from "@ant-design/icons";
import React, { useState } from "react";
const { Search } = Input;

const Product = () => {
  const [openProductForm, setOpenProductForm] = useState(false);

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

  const showProductForm = () => {
    setOpenProductForm(true);
  };

  const onSearch = (value) => {
    console.log(value);
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
              onSearch={onSearch}
            ></Search>
            <Space size="middle">
              {/* <Button>Import</Button> */}
              <Dropdown.Button
                icon={<DownOutlined />}
                menu={dropdownMenu}
                onClick={showProductForm}
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
      <Modal open={openProductForm} title="Title"></Modal>
    </>
  );
};

export default Product;
