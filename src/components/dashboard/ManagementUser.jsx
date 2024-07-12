import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import useUser from '../../hook/useUser';
import { FaTrash } from "react-icons/fa";
import { IoPencilSharp } from "react-icons/io5";
import Input from '../common/Input';

const ManagementUser = () => {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const { getAllUsers, deleteUser, update } = useUser();
    const { data, isLoading, refetch } = getAllUsers();
    const [selectedUser, setSelectedUser] = useState(null);

    const onDelete = (id) => {
        deleteUser(id).then(() => refetch());
    }

    const onSubmit = (formData) => {
        console.log("🚀 ~ onSubmit ~ formData:", formData)
        update(formData)
        refetch();
        document.getElementById('my_modal_1').close();
    }

    useEffect(() => {
        if (selectedUser) {
            Object.keys(selectedUser).forEach(key => {
                setValue(key, selectedUser[key]);
            });
        }
    }, [selectedUser, setValue]);

    if (isLoading) return <span className="loading loading-spinner loading-lg"></span>

    return (
        <div>
            <div className='flex justify-center items-center py-10'>
                <div className='max-w-6xl w-full shadow-lg shadow-indigo-500/50 rounded-2xl border-sky-500'>
                    <div className="overflow-x-auto">
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>DPI</th>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Job Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(user => (
                                    <tr key={user._id}>
                                        <td>{user.DPI}</td>
                                        <td>{user.name}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>{user.jobName}</td>
                                        <td>
                                            <button type='button' onClick={() => onDelete(user._id)} className='btn btn-error btn-sm'><FaTrash /></button>
                                            <button
                                                onClick={() => {
                                                    setSelectedUser(user);
                                                    document.getElementById('my_modal_1').showModal();
                                                }}
                                                className='btn btn-warning mx-2 btn-sm'>
                                                <IoPencilSharp size={15} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit User</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                        <Input label="Name" name="name" type="text" placeholder="Enter Name" register={register} error={errors.name} />
                        <Input label="Last Name" name="lastName" type="text" placeholder="Enter Last Name" register={register} error={errors.lastName} />
                        <Input label="Username" name="userName" type="text" placeholder="Enter Username" register={register} error={errors.userName} />
                        <Input label="Role" name="role" type="text" placeholder="Enter Role" register={register} error={errors.role} />
                        <Input label="Phone" name="phone" type="text" placeholder="Enter Phone" register={register} error={errors.phone} />
                        <Input label="Address" name="address" type="text" placeholder="Enter Address" register={register} error={errors.address} />
                        <Input label="Job Name" name="jobName" type="text" placeholder="Enter Job Name" register={register} error={errors.jobName} />
                        <div className="modal-action">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" onClick={() => document.getElementById('my_modal_1').close()} className="btn">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default ManagementUser;
