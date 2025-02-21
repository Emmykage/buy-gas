
import "./style.scss"

import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    
  Form,
  Input,
  InputNumber,
  
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
    label,
    onChange,
    disabled,
    name,
    defaultValue,
    required=false
}) => {
  return (
    <>
   <Form.Item 
        name={name}

        rules={[
            {
                required:{required},
                message: 'Please input!',
            },
          ]}

        label={label}>

    {type === "number" ? 
    
        
            <InputNumber 
            rules={[
                {
                    required:{required},
                    message: 'Please input!',
                },
            ]}            disabled={disabled}
            onChange={onChange}/>

            : 
        type === "text-area" ?


<TextArea rows={4}
          onChange={onChange}
          disabled={disabled}
          
           />

           : 

<Input
            disabled={disabled}
            onChange={onChange}
           defaultValue={defaultValue}

             />

             
    }

</Form.Item>
        
   </>
  );
};
export default FormInput