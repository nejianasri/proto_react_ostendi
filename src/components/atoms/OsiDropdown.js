import React, {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import Icon from "./Icon";
import {classNames} from "../../helper";

const OsiDropdown = ({icon, dataList = [], onClick}) => {

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={classNames(
                    dataList?.length ?
                        'bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500' : 'bg-gray-200 focus:ring-red-500',
                    'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 '
                )}>
                    <Icon name={icon}/>
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="origin-top-right absolute left-0 mt-2 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            dataList?.map((item, index) => {
                                return (
                                    <Menu.Item
                                        key={index}
                                    >
                                        <a
                                            href="#"
                                            onClick={((e) => onClick(e, index))}
                                            className="block px-4 py-2 text-sm hover:bg-gray-50"
                                        >
                                            {item.action}
                                        </a>
                                    </Menu.Item>
                                )
                            })
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default OsiDropdown;
