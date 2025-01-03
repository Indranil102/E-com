import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({fullName:"", address:'',pincode:"", mobile:""});

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }
  const handleChange= (e)=>{
    setOrderDetails({...orderDetails, [e.target.name]:e.target.value})
    console.log(orderDetails)
  }

  return (
    <>
      <Button
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 text-sm text-white uppercase w-full"
        onClick={() => setOpenModal(true)}
      >
        CheckOut
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={onCloseModal}
      >
        <Modal.Header className="relative flex items-center justify-end">
          <button
            onClick={onCloseModal}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-800 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-sm mx-auto rounded-md shadow-md mt-5">
  
            <div >
              <div className="mb-3">
                <Label htmlFor="email" className="text-black font-semibold mb-3">
                  Your Full Name
                </Label>
                <TextInput
                name="name"
                autoComplete="off"
  id="email"
  placeholder="Enter your name"
  value={setOrderDetails.fullName}
  onChange={handleChange}
  required
  className="mt-2 text-black text-right ml-auto w-full sm:w-auto"
/>

              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="text-black">
                  Your Full Address
                </Label>
                <TextInput
                name="address"
                  id="password"
                  type="text"
                  value={setOrderDetails.address}
                  onChange={handleChange}
                  required
                  className="mt-1 text-black"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="password" className="text-black">
                  Your Pincode
                </Label>
                <TextInput
                name="pincode"
  autoComplete="off"
  id="password"
  value={setOrderDetails.pincode}
  onChange={handleChange}
  type="tel"
  required
  className="mt-1 text-black"
  placeholder="Enter your pincode"
  pattern="[\+]?[0-9]{1,4}?[ ]?([0-9]{10}|[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{4})"
  title="Phone number should be in the format: +1234567890 or 123 456 7890"
/>
              </div>

              <div className="mb-4">
                <Label htmlFor="password" className="text-black">
                  Your PhoneNumber
                </Label>
                <TextInput
                name="mobile"
  id="password"
  type="tel"
  value={setOrderDetails.mobile}
  onChange={handleChange}
  required
  className="mt-1 text-black"
  placeholder="Enter your phone number"
  pattern="[\+]?[0-9]{1,4}?[ ]?([0-9]{10}|[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{4})"
  title="Phone number should be in the format: +1234567890 or 123 456 7890"
/>

              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
             
              
            </div>
            <div className="w-full">
              <Button
                onClick={onCloseModal}
                className="w-full bg-blue-600 text-white rounded-md py-1  hover:bg-blue-700"
              >
                Order Now
              </Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
