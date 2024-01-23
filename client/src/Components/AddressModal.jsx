import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { useState } from 'react';

export function AddressModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const [pincode,setPincode] = useState("");
    const [address,setAddress] = useState("");
    const [state,setState] = useState("");
    const [town,setTown] = useState("");
    const [city,setCity] = useState("");




    const handleAdd = ()=>{

        let newAddress ={
            name:name,
            mobile:mobile,
            pincode:pincode,
            address:address,
            state:state,
            town:town,
            city:city
        }

        console.log(newAddress);

    }



    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <button className='text-[#ff3f6c] font-bold ' onClick={onOpen} >+Add New Address</button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> ADD NEW ADDRESS </ModalHeader>
            {/* <p className='text-[15px] font-bold p-3'> ADD NEW ADDRESS </p> */}
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <div >
               <hr/>
                <div >
                    <label className='text-[#0db7af] text-[12px]' > Name* </label>
                    <br />
                    <input type="text"
                     className=' w-[70%] text-[12px] border-b border-[#999191] placeholder-[#A0AEC0] focus:outline-none focus:border-[#ff3f6c]'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    placeholder='Name*'  />
                    <br />
                     <label className='text-[#0db7af] text-[12px]' > Mobile* </label>
                    <br />
                    <input type="text"
                     className=' w-[70%] text-[12px] border-b border-[#999191] placeholder-[#A0AEC0] focus:outline-none focus:border-[#ff3f6c]'
                     value={mobile}
                     onChange={(e)=> setMobile(e.target.value)}
                    placeholder='Mobile*'  />
                </div>
                <hr className='mt-4'/>
                <div >
                    <div className='flex my-4'>
                   <div>

                   
                    <label className='text-[#0db7af] text-[12px]' > Pincode* </label>
                    <br />
                    <input type="text"
                     className=' w-[70%] text-[12px] border-b border-[#999191] placeholder-[#A0AEC0] focus:outline-none focus:border-[#ff3f6c]'
                     value={pincode}
                     onChange={(e)=> setPincode(e.target.value)} 
                   placeholder='Pincode*'  />
                    <br />
                    </div>
                    <div>
                     <label className='text-[#0db7af] text-[12px]' > State* </label>
                    <br />
                    <input type="text"
                     className=' w-[70%] text-[12px] border-b border-[#999191] placeholder-[#A0AEC0] focus:outline-none focus:border-[#ff3f6c]'
                     value={state}
                     onChange={(e)=> setState(e.target.value)}
                    placeholder='State*'  />
                    </div>
                    </div>
                    <div className='my-3'>
                    <label className='text-[#0db7af] text-[12px] ' > Address(HouseNo, Building, Street, Area)* </label>
                    <br />
                     <input type="text"
                     className=' w-[70%] text-[12px] border-b border-[#999191] placeholder-[#A0AEC0] focus:outline-none focus:border-[#ff3f6c]'
                     value={address}
                     onChange={(e)=> setAddress(e.target.value)}
                    placeholder='Address(HouseNo, Building, Street, Area)*'  />
                    <br/>
                    </div>
                    <div className='my-3'>
                    <label className='text-[#0db7af] text-[12px] mt-5' > Locality/Town* </label>
                    <br />
                     <input type="text"
                     className=' w-[70%] text-[12px] border-b border-[#999191] placeholder-[#A0AEC0] focus:outline-none focus:border-[#ff3f6c]'
                     value={town}
                     onChange={(e)=> setTown(e.target.value)}
                    placeholder=' Locality/Town*'  />
                    <br/>
                    </div>
                    <label className='text-[#0db7af] text-[12px] mt-5' > City/District* </label>
                    <br />
                     <input type="text"
                     className=' w-[70%] text-[12px] border-b border-[#999191] placeholder-[#A0AEC0] focus:outline-none focus:border-[#ff3f6c]'
                     value={city}
                     onChange={(e)=> setCity(e.target.value)}
                    placeholder=' Locality/Town*'  />
                  <br />
                  <hr className='mt-3' />
                  <div className='mt-4 flex align-middle'>
                  <input className='mr-2 w-3'  type="checkbox" name="" id="" />
                  <label className='text-[12px]' >Make this as default address</label>
                  </div>


                </div>
              </div>
            </ModalBody>
  
            <ModalFooter>
            <Button onClick={handleAdd} colorScheme='green'  mr={3}>ADD</Button>  
              <Button colorScheme='blue' onClick={onClose}>
                Close
              </Button>
           
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }