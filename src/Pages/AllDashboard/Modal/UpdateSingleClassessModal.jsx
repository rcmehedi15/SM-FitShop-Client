import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import UpdateMyClassesForm from '../InstructorDashboard/Form/UpdateMyClassesForm'
import { updateClasses } from '../../../api/Classes'
import { photoUpload } from '../../../api/photoUpload'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const UpdateSingleClassessModal = ({ setIsEditModalOpen, isOpen, refetch, singleClass, id }) => {
    const [loading, setLoading] = useState(false)

    const [singleClassesData, setSingleClassesData] = useState(singleClass)
    const navigate = useNavigate()
    const handleImageUpdate = image => {
        setLoading(true)
        photoUpload(image)
            .then(res => {
                setSingleClassesData({ ...singleClassesData, image: res.data.display_url })
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }
    const handleSubmit = event => {
        event.preventDefault()
        console.log(singleClassesData)
        const classesData = Object.assign({}, { ...singleClassesData })
        delete classesData._id
        setLoading(true)
        updateClasses(classesData, id)
            .then(data => {

                navigate('/dashboard/my-classes');
                toast.success('Classes info updated')
                setLoading(false)
                refetch()
                setIsEditModalOpen(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    console.log(singleClassesData);



    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsEditModalOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900 p-2'
                                >
                                    Update Classes Info
                                </Dialog.Title>
                                <div className='w-full'>

                                    <UpdateMyClassesForm
                                        handleSubmit={handleSubmit}
                                        singleClassesData={singleClassesData}
                                        setSingleClassesData={setSingleClassesData}
                                        handleImageUpdate={handleImageUpdate}
                                        loading={loading}


                                    />
                                </div>
                                <hr className='mt-8 ' />
                                <div className='mt-2 text-center'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center  items-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                        onClick={() => setIsEditModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default UpdateSingleClassessModal;