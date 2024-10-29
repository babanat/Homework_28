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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {["name", "lastname", "phone", "email", "address", "city", "country", "zipCode"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-bold mb-2 capitalize">{field}</label>
            <input
              type="text"
              {...register(field)}
              className="border border-gray-300 p-2 w-full"
            />
            {errors[field] && <p className="text-red-500 text-xs">{errors[field].message}</p>}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
}

export default Register;
