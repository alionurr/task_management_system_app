import React from "react";
import { Controller } from "react-hook-form";
import { InputText } from 'primereact/inputtext'

interface InputProps {
    label?: string
    type?: string
    name: string
    control: any
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    name,
    control,
}) => {
    return (
      <div className='my-2'>
            {label && <label
                htmlFor= {name}
                className='block text-sm font-medium text-gray-700'
            >
                {label}
            </label>}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputText
              id={name}
              type={type}
              {...field}
              className='w-full mt-1 border px-2 py-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-md'
            />
          )}
        />
      </div>
    )
}

export default Input