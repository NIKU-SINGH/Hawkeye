import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto font-Poppins">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-300"
                      >
                        Add Node
                      </Dialog.Title>
                      <div className="mt-2 flex text-gray-300 items-center justify-center">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 mr-10 w-20"
                        >
                          Name
                        </label>

                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-gray-700 rounded-lg py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>

                      <div className="mt-2 flex text-gray-300 items-center justify-center">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 mr-10 w-20"
                        >
                          Username
                        </label>

                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-gray-700 rounded-lg py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>
                      <div className="mt-2 flex text-gray-300 items-center justify-center">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 mr-10 w-20"
                        >
                          RPC Host
                        </label>

                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-gray-700 rounded-lg py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>
                      <div className="mt-2 flex text-gray-300 items-center justify-center">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 mr-10 w-20"
                        >
                          RPC Port
                        </label>

                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-gray-700 rounded-lg py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>

                      <div className="mt-2 flex text-gray-300 items-center justify-center">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 mr-10 w-20"
                        >
                          Mirror RPC Port
                        </label>

                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-gray-700 rounded-lg py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>

                      <div className="mt-2 flex text-gray-300 items-center justify-center">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 mr-10 w-20" 
                        >
                          Archive
                        </label>

                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-gray-700 rounded-lg py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>


                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Add
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
