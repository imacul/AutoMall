"use client";

import { Fragment, useState } from 'react';
import { SetMenuProps } from '@/types';
import Image from 'next/image';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';

const SearchMaker = ({maker, setMaker}: SetMenuProps) => {
const [query, setQuery] = useState("");

const filteredManufacturers = 
    query == "" 
    ? manufacturers 
    : manufacturers.filter((item) => (
      item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
))

  return (
    <div className="search-manufacturer">
      <Combobox value={maker} onChange={setMaker}>
        <div className="relative w-full">
          <ComboboxButton className="absolute ml-4 -translate-y-2/2 top-[14px]">
              <Image
                src="/car-logo.svg"
                width={20}
                height={20}
                alt="car logo"
               />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input rounded-full lg:w-[350px]"
            placeholder="Benz"
            displayValue={(make: string) => make}
            onChange={
              (e) => {
                const Query = e.target.value
                setQuery(Query);
                console.log(`Typing... ${Query}`);
              }
            }
           />

           <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
           >
              <ComboboxOptions>
                  {filteredManufacturers.map((item) => (
                      <ComboboxOption
                        key={item}
                        className={({active}) => `
                            relative search-manufacturer-option
                            ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                        `}
                        value={item}
                      >
                          {({selected, active}) => (
                            <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {item}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 
                                  ${active 
                                    ? 'text-white' 
                                    : 'text-teal-600'}`
                                  } 
                              >

                              </span>
                            ): null}
                            </>
                          )}
                      </ComboboxOption>
                    )
                  )}
              </ComboboxOptions>
           </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchMaker;