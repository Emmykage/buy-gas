import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'
import { Button } from 'antd';
import "./style.scss"
const AppButton = ({
    children,
    onClick,
    className
}) => {
  return (
        <Button 
            className={className}
            onClick={onClick}
            size={"larger"}
            style={{
                marginTop: 20,
                width: "100%"
            }}
        >
         {children}

        </Button>

  )
}

export default AppButton