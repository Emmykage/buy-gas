import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'
import { Button } from 'antd';
import "./style.scss"
const AppButton = ({
    children,
    onClick,
    className,
    style
}) => {
  return (
        <Button 
            className={className}
            onClick={onClick}
            size={"larger"}
            style={{
                marginTop: 20,
                width: "100%",
                // maxWidth: "50%",
                margin: "20px auto" ,
                display: "flex",
                ...style
            }}

      >
         {children}

        </Button>

  )
}

export default AppButton