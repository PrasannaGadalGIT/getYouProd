import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

function ProductDetailForm() {
  const field_style =
    "bg-white outline-none flex-1 w-[30rem] h-10 my-5 p-2";

  const [file, setfile] = useState(null);

  const handleImageSave = (e)=>{
      
    setfile(e.target.files[0])
  }

const handleSave = async(values) => {
 
  const formData = new FormData()

  Object.entries(values).map(item=>{
    formData.append(item[0], item[1])
  })
  formData.append('productPic', file)
  try {
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    await fetch(
      "http://localhost:3002/addNewProducts",
      requestOptions
    );
  } catch (err) {
    alert("Enter Information");
  }

   
  };

  return (
    <>
      <Formik
        initialValues={{
          productName: "",
          price: "",
          productPic: "",
          productDetails: "",
        }}
        onSubmit={(values) => {
           
            handleSave(values);
           
          
          }
        }
      >
        {({ errors, touched }) => (
          <Form className=" h-auto border-black-1 text-center relative top-7">
           

            <div className=" relative top-14 left-5 bg-gray-800 p-7 text-white">
            <h2 className=" text-2xl font-bold mb-7">Product</h2>
              <div>
                <Field
                  name="productName"
                  placeholder="Product Name"
                  type="text"
                  className={field_style}
                />
                {errors.productName && touched.productName ? (
                  <div>{errors.productName}</div>
                ) : null}
              </div>
              <div className=" ">
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
              <div className=" ">
                <input
                  name="productPic"
                  type="file"
                  className={field_style}
                  onChange={handleImageSave}
                />
              </div>

              <div className=" ">
                <Field
                  name="productDetails"
                  placeholder="Enter your product details"
                  type="textArea"
                  className={field_style}
                />
                {errors.email && touched.email ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className=" bg-white text-black font-bold p-3 rounded-xl hover:bg-gray-700 my-2"
              >
                Add product
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ProductDetailForm;
