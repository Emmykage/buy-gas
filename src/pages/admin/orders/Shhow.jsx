import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrder, updateOrder } from '../../../redux/actions/order';
import dateFormater from '../../../utils/dateFormatter';
import Loader from '../../../components/loader/Loader';
import { nairaFormat } from '../../../utils/nairaFormat';
import { FaArrowLeft } from "react-icons/fa";
import FormInput from '../../../components/input/Input';
import { getAgents } from '../../../redux/actions/users';
import { Form } from 'antd';
import { useWatch } from 'antd/es/form/Form';

const ShowOrder = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contRef = useRef();
    const [form] = Form.useForm()
    const { order, loading } = useSelector((state) => state.order);
    const { agents } = useSelector((state) => state.user);
    console.log(agents)
   
    
  
    useEffect(() => {
      dispatch(getOrder(id));
              dispatch(getAgents())
      
    }, [id]);

    useEffect(()=>{
      form.setFieldsValue({agent: order?.agent_id})
    },[order])
  

    const selectAgent = useWatch("agent", form)

    console.log(selectAgent, agents[0]?.id   )
    // useEffect(() => {
    //   const observer = new IntersectionObserver(([entry]) => {
    //     if (entry.isIntersecting && !order?.viewed) {
    //       dispatch(updateOrder({ id, data: { viewed: true } })).then((result) => {
    //         if (updateOrder.fulfilled.match(result)) {
    //           dispatch(getStatistics());
    //         }
    //       });
    //       observer.unobserve(entry.target);
    //     }
    //   }, { threshold: 0.5 });
  
    //   if (contRef.current) {
    //     observer.observe(contRef.current);
    //   }
    //   return () => {
    //     if (contRef.current) {
    //       observer.unobserve(contRef.current);
    //     }
    //   };
    // }, [order?.viewed]);
  return (
    <div className="bg-white p-6" ref={contRef}>

    <div className="flex">
      <span onClick={() => navigate(-1)} className="mr-4 border cursor-pointer border-gray-400 h-10 shadow w-12 rounded flex justify-center items-center">

        <FaArrowLeft className="text-lg" />
        </span>
      <div>
        <p className="text-green-700 text-xs">Order/Order details</p>
        <p className="text-xl font-semibold text-gray-800">
          Order#
          {order?.invoice_number}
        </p>

      </div>
    </div>
    <div className="pb-7 pt-5  px-5 my-7 rounded-xl border border-gray-300">

      <div className=" flex flex-col lg:flex-row ">
        <div className="flex-1">

          <p className="text-2xl my-3 text-gray-800 font-semibold">
            Order #
            {order?.id}
          </p>
          {order?.status == 'initiatialize' ? <span className="bg-orange-200 px-4 py-1 text-orange-800 font-medium rounded"> awaiting confirmation</span> : order?.status == 'declined' ? <span className="bg-red-200 px-4 py-1 text-red-800 font-medium rounded">Order Rejected </span> : <span className="bg-blue-200 px-4 py-1 text-blue-800 font-medium rounded"> Ready to ship</span>}
          <div className="flex flex-col md:flex-row gap-7 my-5">

            <span className="bg-gray-300 px-2 py-1 rounded-lg text-xs">
              ordered:
              {' '}
              {dateFormater(order?.created_at)}
            </span>
            <span className="bg-gray-300 px-2 py-2.5 rounded-lg text-xs">
              paid on: {dateFormater(order?.updated_at)}
            </span>
           

          </div>
        </div>
        <div className="flex gap-3 max-w-[280px]  w-full">
          <span className="p-2 border border-gray-300 h-max rounded-lg ">More</span>
          <span className="p-2 bg-green-600 h-max text-white rounded-lg font-medium">Create shippin Label</span>

        </div>
      </div>

      <div className="flex justify-end">

        <span className={` ${order?.status == 'pending' ? 'bg-orange-200 text-orange-800' : order?.status == 'confirmed' ? 'bg-green-200 text-green-800' : 'bg-red-200  text-red-800'}  px-3 py-1 text-sm"`}>
          {order?.status}

        </span>
      </div>

    </div>
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="border rounded-lg p-4 border-gray-300">
        <div className="flex justify-between">
          <p className="text-sm font-semibold text-gray-700">CUSTOMER & ORDER</p>
          <button onClick={() => {}}>Edit</button>

        </div>
        <div>
          
         
          <div className="flex justify-between my-2  text-gray-500 flex-col md:flex-row">
            <span className="flex-1 font-semibold  text-gray-600">Phone:</span>
            <span className="flex-1">{order?.phone}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-2">
            <span className="flex-1 font-semibold  text-gray-600">Payment Method:</span>
            <span className="flex-1 uppercase">
              {' '}Card
            </span>
          </div>
         
        </div>

      </div>
      <div className="border rounded-lg p-4 border-gray-300">
        <div className="flex justify-between">
          <p className="text-sm font-semibold text-gray-700">SHIPPING ADDRESS</p>
          <button onClick={() => {}}>Edit</button>

        </div>
        <div>
          {order?.address}
          {' '}
          {order?.billing_address?.city}
          {' '}
          {order?.billing_address?.atate}
        </div>
        <div className="flex flex-col md:flex-row justify-between my-2">
            <span className="flex-1 font-semibold  text-gray-600">Location:</span>
            <span className="flex-1 uppercase">
              {' '}{order?.location}
            </span>
          </div>

      </div>
  
    </div>

    <div className="my-8">
      <div className="flex justify-between">
        <p className="font-semibold text-sm">Items Ordered</p>
        <button>Edit</button>
      </div>
      <div className=" overflow-x-auto  bg- no-scroll">

        {loading ? <Loader />
          : (
            <table className="min-w-full  border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
              <thead>
                <tr>
                  <th />
                  <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Quantity</th>
                  <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Phone</th>
                  <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Amount</th>
                  <th scope="col" className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-900  backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">total</th>

                </tr>
              </thead>
              <tbody>
                  <tr key={order.id}>
                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8"/>
                  
                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">{order.quantity}</td>
                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">{order.phone}</td>
                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">{ nairaFormat(order.amount)}</td>
                    {/* <td>{item.billing_address.city}</td> */}
                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">{nairaFormat(order.amount)}</td>
                 
                  </tr>

                  <tr>
                  <td className="whitespace-nowrap border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                    {' '}
                    <span>Delivery Fee</span>
                  </td>
                  <td />

                  <td />
                  {' '}
                  <td />
                  <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                    {' '}
                    <span>{nairaFormat(order?.delivery_fee ?? 0)}</span>
                  </td>

                </tr><tr>
                  <td className="whitespace-nowrap  border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                    {' '}
                    <span>Service Charge</span>
                  </td>
                  <td />

                  <td />
                  {' '}
                  <td />
                  <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                    {' '}
                    <span>{nairaFormat(order?.service_charge ?? 0)}</span>
                  </td>

                </tr>
                <tr>
                  <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                    {' '}
                    <span>Total</span>
                  </td>
                  <td />

                  <td />
                  {' '}
                  <td />
                  <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                    {' '}
                    <span className="text-xl font-bold text-gray-800">{ nairaFormat(parseInt(order?.total_amount))}</span>
                  </td>

                </tr>
              </tbody>
            </table>
          ) }

      </div>

      <div>
        <p className='text-sm font-semibold'>
        Currency NGN
        </p>
         
      </div>

    </div>
    <div className="my-8 overflow-x-auto no-scroll">
      <div className="flex justify-between">
        <p className="font-semibold text-sm">Invoices </p>
        <div className='max-w-[200px] w-full bg-gray-300 '>
          <Form  
          form={form}
          initialValues={{
            agent: ""
          }}>

          <FormInput name={"agent"} placeHolder={"Select Agent"} options={agents?.map(item => (
            {
              label:`${ item.first_name } ${ item.first_name }`, value: item.id
            }
          ))} type={"select"} />

        </Form>


        </div>
      </div>
      <div className=" overflow-x-auto no-scroll">
      
      </div>

    </div>
    {/* <div className="flex justify-between">
      <DiscoverBtn type="cancel" btnText="Decline Order" onclick={() => setOpen(true)} />

      <DiscoverBtn btnText="Confirm Order" onclick={() => setOpenAccept(true)} />
    </div>

    <Confirmation open={openAccept} cnlAction={() => { setOpenAccept(false); }} btnAction={() => { handleUpdate('confirmed'); }} />
    <Confirmation open={openDecline} cnlAction={() => { setOpenDecline(false); }} btnAction={() => { handleUpdate('confirmed'); }}>Confrim Reject Order</Confirmation> */}

  </div>
  )
}

export default ShowOrder