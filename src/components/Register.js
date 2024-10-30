import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .regex(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"), 
    lastname: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .regex(/^[A-Za-z\s]+$/, "Last name must contain only letters and spaces"), 
    phone: z
      .string()
      .min(5, "Phone must be at least 5 characters")
      .max(15, "Phone must be less than 15 characters")
      .regex(/^\+?[0-9]+$/, "Phone must contain only numbers and an optional leading +"), 
    email: z.string().email("Invalid email format"),
    address: z
      .string()
      .min(5, "Address must be at least 5 characters")
      .max(100, "Address must be less than 100 characters"), 
    city: z
      .string()
      .min(2, "City must be at least 2 characters")
      .max(50, "City must be less than 50 characters"),
    country: z
      .string()
      .min(2, "Country must be at least 2 characters")
      .max(50, "Country must be less than 50 characters"),
    zipCode: z
      .string()
      .min(5, "Zip code must be at least 5 characters")
      .max(10, "Zip code must be less than 10 characters")
      .regex(/^\d+$/, "Zip code must contain only numbers") 
  });

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0e101c]">
      <div className="max-w-md w-full p-8 bg-[#1f2233] text-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-light mb-6 text-center border-b border-blue-500 pb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {["name", "lastname", "phone", "email", "address", "city", "country", "zipCode"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold mb-2 capitalize">{field}</label>
              <input
                type="text"
                {...register(field)}
                className="w-full border border-gray-400 rounded-lg p-3 text-black"
              />
              {errors[field] && (
                <p className="text-[#bf1650] text-xs mt-1">
                  ⚠ {errors[field].message}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#ec5990] hover:bg-[#bf1650] text-white py-3 rounded-lg mt-6 transition duration-200 uppercase tracking-wide"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

