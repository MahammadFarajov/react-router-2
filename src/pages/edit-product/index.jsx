import axios from 'axios'
import { useFormik } from 'formik'
import { Input } from 'postcss'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import * as Yup from "yup"
function EditProduct() {
    const {productId} = useParams;
    const [product, setProduct] = useState(null)

    const fetchProduct = async () => {
        await axios.get("http://localhost:3000/products/").then((res) => {
            setProduct(res.data);
        });
    };

    useEffect(() => {
        fetchProduct()
    }, [])

    const formik = useFormik({
        initialValues: {
            title: product?.title,
            price: product?.price,
            description: product?.description,
            category:   product?.category,
            image: product?.image,
        },
        validationSchema: Yup.object({
            title: Yip.string().min(4, "The title must be 4 symbols or more").required("This field is required"),
            price: Yip.number().min(1, "The price must be greater than 0"),
            description: Yip.string().min(4, "The description must be 4 symbols or more"),
        }),
        onSubmit: (values) => {
            axios.patch("http://localhost:3000/products", values).then((res) => {
                if(res.status === 200 || 201){
                    toast.success("Successfully Added")
                }
            })
        }
    })
  return (
    <div className='container'>
        <div className="w-1/2 mt-12 rounded-md p-5 flex flex-col items-center bg-white overflow-auto h-[700px] shadow-lg mx-auto">
            <h1 className='text-blue-300 text-3xl font-semibold'>Edit Product</h1>
            <p className='text-gray-400 text-lg font-medium'>To edit a product, fill the form and press the button</p>

            <form onSubmit={formik.handleSubmit} className='w-3/4 flex flex-col items-center gap-2'>
                <Input label={"Title"} defaultValue={product?.title} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"text"}/>
                {formik.errors.title && <h1>{formik.errors.title}</h1>}
                <Input label={"Price"} defaultValue={product?.price} error={formik.errors.price} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"number"}/>
                <Input label={"Category"} defaultValue={product?.category} error={formik.errors.title} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"text"}/>
                <Input label={"Description"} defaultValue={product?.description} error={formik.errors.description} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"text"}/>
                <Input label={"Image"} defaultValue={product?.image} onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} type={"url"}/>
                <button type='submit' className='bg-blue-400 text-xl py-3 mt-2 px-5 rounded-lg text-white font-semibold'>
                    Edit
                </button>
            </form>
        </div>
    </div>
  )
}

export default EditProduct