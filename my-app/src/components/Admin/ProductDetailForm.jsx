import React from "react";
import { Formik, Form, Field, rese } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "sonner";

import { Button } from "@/components/ui/button"
 

function ProductDetailForm() {
  const field_style =
    "bg-white outline-none flex-1 w-[10rem] h-[2rem]  w-[28rem] my-5 p-1 pl-2 text-black";

  const [file, setfile] = useState(null);

  const handleImageSave = (e) => {
    setfile(e.target.files[0]);
  };

  const handleSave = async (values) => {
    const formData = new FormData();

    Object.entries(values).map((item) => {
      formData.append(item[0], item[1]);
    });
    formData.append("productPic", file);
    try {
      const requestOptions = {
        method: "POST",
        body: formData,
      };
      await fetch("http://localhost:3002/addNewProducts", requestOptions);
  
    
    } catch (err) {
      alert("Enter Information");
    }
  };
  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product Name is required"),
    price: Yup.string().required("Price is required"),
    productPic: Yup.mixed().required("Product Picture is required"),
    productDetails: Yup.string().required("Product Details are required"),
    stock: Yup.string().required("Stock is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          productName: "",
          price: "",
          productPic: "",
          productDetails: "",
          stock: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSave(values);
          resetForm();
       
        }}
      >
        {({ errors, touched }) => (
          <Form className="  border-black-1 text-center relative">
            <div className=" relative top-[1rem] left-5 bg-gray-800 p-7 text-white h-[23rem] w-[42rem] rounded-2xl">
              <h2 className=" text-2xl font-bold mb-2">Product</h2>
              <div className=" flex gap-3">
                <Field
                  name="productName"
                  placeholder="Product Name"
                  type="text"
                  className={field_style}
                />
                {errors.productName && touched.productName ? (
                  <div>{errors.productName}</div>
                ) : null}

                <Field
                  name="price"
                  placeholder="Price"
                  type="text"
                  className={field_style}
                />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
              </div>
              <div className=" flex gap-3">
                <input
                  name="productPic"
                  type="file"
                  className={field_style}
                  onChange={handleImageSave}
                />

                <Field
                  name="stock"
                  placeholder="Stock"
                  className={field_style}
                />
                {errors.stock && touched.stock ? (
                  <div>{errors.stock}</div>
                ) : null}
              </div>

              <div className=" ">
                <Field
                  name="productDetails"
                  placeholder="Enter your product details"
                  className={field_style}
                />
                {errors.email && touched.email ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>

              <Button
                type="submit"
                className="bg-white text-black font-bold p-3 rounded-xl hover:bg-gray-700 my-2"
                variant="outline"
                onClick={() =>
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023, at 9:00 AM",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
              >
                Add product
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ProductDetailForm;
