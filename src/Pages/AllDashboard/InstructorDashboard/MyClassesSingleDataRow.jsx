
import React, { useState } from 'react'
import toast from 'react-hot-toast'
// import { deleteRoom } from '../../api/rooms'
// import DeleteModal from '../Modal/DeleteModal'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';

const MyClassesSingleDataRow = ({ singleClasses, fetchClasses }) => {
    let [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    const modalHandler = id => {
        console.log(id)
        deleteRoom(id)
            .then(data => {
                console.log(data)
                fetchClasses()
                toast.success('Class deleted')
            })
            .catch(err => console.log(err))
        closeModal()
    }
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="block relative">
                            <img
                                alt="profile"
                                src={singleClasses?.classImage}
                                className="mx-auto object-cover rounded h-10 w-15"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{singleClasses?.className}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">{singleClasses?.availableSeats}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">${singleClasses?.price}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">0</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">pending</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">not Feedback</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                
                    <button className="mr-5" title="Delete">
                        <RiDeleteBin6Line className="text-red-500 text-lg" />
                    </button>
                    <button >
                        <AiFillEdit className="text-green-500 text-lg" title="Edit" />
                    </button>
                    
                
            </td>

        </tr>
    )
}

export default MyClassesSingleDataRow;