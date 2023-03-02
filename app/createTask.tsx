"use client"

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import pb from './pocketbase';


export default function CreateTaskDialog() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const router = useRouter();

    const create = async() => {

        await pb.collection("bio_data").create({
            name,
            email,
            phone : Number(phone),
            address,
            status,
            date,
        });


    
    //     await fetch('http://127.0.0.1:8090/api/collections/bio_data/records', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         name,
    //         email,
    //         phone,
    //         address,
    //         status,
    //         date,

    //       }),
    //     });
    
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setStatus('');
        setDate('');
    
        router.refresh();
      }

      return (
        <Dialog.Root>
        <Dialog.Trigger asChild>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-0">
    Add New Employee
  </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          <Dialog.Content className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-2">
              Add New Employee
            </Dialog.Title>
            <Dialog.Description  className="text-sm text-gray-500 mb-6">
              Add new employee details below
            </Dialog.Description>
            <form onSubmit={create}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-300 rounded-md shadow-sm py-2 px-3 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 rounded-md shadow-sm py-2 px-3 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="border border-gray-300 rounded-md shadow-sm py-2 px-3 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter phone"
                    value = {phone}
                    onChange = {(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="border border-gray-300 rounded-md shadow-sm py-2 px-3 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter address"
                    value = {address}
                    onChange = {(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value = {status}
                    onChange = {(e) => setStatus(e.target.value)}
                    className="border border-gray-300 rounded-md shadow-sm py-2 px-3 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Unavaliable</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="border border-gray-300 rounded-md shadow-sm py-2 px-3 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Enter date"
                        value = {date}
                        onChange = {(e) => setDate(e.target.value)}
                    />
                </div>
                </div>
                <div className="mt-6">
                <button
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                >
                    Add Employee
                </button>
                </div>
            </form>

            </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root>

      
      
      
      )
}


