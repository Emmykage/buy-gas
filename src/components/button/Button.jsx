import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'
import { Button } from 'antd';
import "./style.scss"
const AppButton = ({
    children,
    onClick,
    className,
    style,
    htmlType
}) => {
  return (
        <Button 
            className={className}
            onClick={onClick}
            size={"larger"}
            style={{
                marginTop: 20,
                width: "100%",
                margin: "20px auto" ,
                display: "flex",
                ...style
            }}
            htmlType={htmlType}

      >
         {children}

        </Button>

  )
}

export default AppButton