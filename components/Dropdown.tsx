import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ReactElement } from "react";

interface DropdownInterface {
  title: ReactElement<any, any>;
  content: string;
}
export default function Dropdown({ content, title }: DropdownInterface) {
  return (
    <div className="w-full ">
      <div className="w-full ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="">
                <div className="flex">
                  <div>{title}</div>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div
                  className="p-5"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
