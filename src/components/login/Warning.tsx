import React from "react";
import {Alert} from "antd";

const Warning: React.FunctionComponent<any> = ({message}) => {

  return(

      <Alert
          style={{ marginTop: "10px" }}
          message="Ошибка при вводе данных"
          description={message}
          type="error"
          showIcon
      />

  );

};

export default Warning;
