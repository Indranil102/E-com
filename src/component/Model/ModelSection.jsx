import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
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
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-sm mx-auto bg-white rounded-md shadow-md">
            
            <div>
              <div className="mb-4">
                <Label htmlFor="email" className="text-black font-semibold" />your mail
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 text-black"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="text-black" />
                 Your Address
                <TextInput
                  id="password"
                  type="text"
                  required
                  className="mt-1 text-black"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label  className="text-black text-sm">
                 ada
                </Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button
                onClick={onCloseModal}
                className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
              >
                Log in to your account
              </Button>
            </div>
            <div className="text-sm text-center mt-4 text-black">
              Not registered?{" "}
              <a
                href="#"
                className="text-cyan-700 hover:underline"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
