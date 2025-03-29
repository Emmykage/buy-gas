
import "./style.scss"

import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    
  Form,
  Input,
  InputNumber,
  Select,
  
} from 'antd';
// const { RangePicker } = DatePicker;
const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
const FormInput = ({
    type,
    max,
    label,
    onChange,
    disabled,
    name,
    options,
    defaultValue,
    placeHolder,
    required=false
}) => {

  return (
    <>
   <Form.Item 
        name={name}
        normalize={(value) => typeof value === "string" ? value?.trim() : value}

        rules={[
            {
                required: required,
                message: 'Please input!',
            },
          ]}
        label={label}
      >

    {type === "number" ? 
    
        
            <InputNumber 
           disabled={disabled}
           max={max}
            onChange={onChange}/>

            : 
        type === "text-area" ?


        <TextArea rows={4}
                  onChange={onChange}
                  disabled={disabled}
                  
                  />

           : 

           type=== "select" ?

           <Select
           disabled={disabled}
           value={defaultValue}
           onChange={onChange}
           options={options}
           placeholder={placeHolder}

           >
         </Select>

         :

         type=== "hidden" ?


         <Input
         type="hidden"
            disabled={disabled}
            onChange={onChange}
           defaultValue={defaultValue}
           placeholder={placeHolder}


             />

         :

         <Input
            disabled={disabled}
            onChange={onChange}
           defaultValue={defaultValue}
           placeholder={placeHolder}


             />

             
    }

</Form.Item>
        
   </>
  );
};
export default FormInput