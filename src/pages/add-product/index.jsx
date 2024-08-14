import axios from 'axios'
import { useFormik } from 'formik'
import { Input } from 'postcss'
import React from 'react'
import * as Yup from "yup"

function AddProduct() {
    const formik = useFormik({
        initialValues: {
            title: "",
            price: 0,
            description: "",
            category:"",
            image: "",
        },
        validationSchema: Yup.object({
            title: Yip.string().min(4, "The title must be 4 symbols or more").required("This field is required"),
            price: Yip.number().min(1, "The price must be greater than 0"),
            description: Yip.string().min(4, "The description must be 4 symbols or more"),
        }),
        onSubmit: (values) => {
            axios.post("http://localhost:3000/products", values).then((res) => {
                if(res.status === 200 || 201){
                    toast.success("Successfully Added")
                }
            })
        }
    })
  return (
    <div className='container'>
        <div className="w-1/2 mt-12 rounded-md p-5 flex flex-col items-center bg-white overflow-auto h-[700px] shadow-lg mx-auto">
            <h1 className='text-blue-300 text-3xl font-semibold'>Add Product</h1>
            <p className='text-gray-400 text-lg font-medium'>To add a product, fill the form and press the button</p>

            <form onSubmit={formik.handleSubmit} className='w-3/4 flex flex-col items-center gap-2'>
                <Input label={"Title"} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"text"}/>
                {formik.errors.title && <h1>{formik.errors.title}</h1>}
                <Input label={"Price"} error={formik.errors.price} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"number"}/>
                <Input label={"Category"} error={formik.errors.title} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"text"}/>
                <Input label={"Description"} error={formik.errors.description} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"text"}/>
                <Input label={"Image"} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"url"}/>
                <button type='submit' className='bg-blue-400 text-xl py-3 mt-2 px-5 rounded-lg text-white font-semibold'>
                    Add
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct