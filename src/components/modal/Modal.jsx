// import React, { useState } from 'react';
import { Modal } from 'antd';
import "./style.scss"
import { CloseCircleFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
const AppModal = ({
    children, 
    isModalOpen,
    handleCancel,
    title,
    className,
    // footer,
    handleOk}) => {

  return (
    <>

      <Modal 
      open={isModalOpen} 
      title={title}
      onOk={handleOk} 
      onCancel={handleCancel}
      // closeIcon={<CloseCircleFilled className='text-white'/>}
      closable={true}
      centered={true}
      maskClosable={true}
      footer={ null}
      className={className}
      // style={{
      //   backgroundColor: "white"
      // }}
      >
       
       
       <div >
        {children}

       </div>
      </Modal>
    </>
  );
};

AppModal.propTypes = {
  children: PropTypes.node, 
  isModalOpen: PropTypes.bool,
  handleCancel: PropTypes.func,
  title: PropTypes.string,
  footer: PropTypes.node,
  handleOk: PropTypes.func
}
export default AppModal;