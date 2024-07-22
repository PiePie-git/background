import { Form } from "antd";
const productForm = () => {
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked"></Form.Item>
      </Form>
    </>
  );
};
export default productForm;
