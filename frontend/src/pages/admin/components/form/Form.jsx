import React from 'react'
import style from './Form.module.scss'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {postProductThunk} from "../../../../redux/reducers/productSlice.js";
import * as Yup from 'yup'

const Form = () => {

    const dispatch = useDispatch();

    const validationScheme = Yup.object({
        image: Yup.string().required("Image").min(2, "Image"),
        price: Yup.string().required("Price").min(2, "Price"),
        name: Yup.string().required("Name").min(2, "Name"),
        description: Yup.string().required("Description").min(2, "Description"),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            description: "",
            image: "",
            it: ""
        },
        validationScheme,
        onSubmit: (values) => {
            const data = {
                ...values,
                it: String("item" * Math.random() * 123456789),
            }
            dispatch(postProductThunk(data))
        }
    })

    return (
       <div className={style.main}>
           <form onSubmit={formik.handleSubmit}>
               <label htmlFor="name">Name</label>
               <input
                   id="name"
                   name="name"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.name}
               />
               {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span>  : null}
               <label htmlFor="price">Price</label>
               <input
                   id="price"
                   name="price"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.price}
               />
               {formik.touched.price && formik.errors.price ? <span>{formik.errors.price}</span>  : null}
               <label htmlFor="description">Description</label>
               <input
                   id="description"
                   name="description"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.description}
               />
               {formik.touched.description && formik.errors.description ? <span>{formik.errors.description}</span>  : null}
               <label htmlFor="image">Image</label>
               <input
                   id="image"
                   name="image"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.image}
               />
               {formik.touched.image && formik.errors.image ? <span>{formik.errors.image}</span>  : null}
               <button type="submit">Submit</button>
           </form>
       </div>
    )
}

export default Form